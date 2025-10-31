// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import React from 'react'
// import { useMediaQuery } from 'react-responsive'
// import { Room } from './Room'
// import HeroLights from './HeroLights'
// import Particles from './Particles'

// const HeroExperience = () => {
//     const isTablet = useMediaQuery({ query: '(max-width:1024px)' });
//     const isMobile = useMediaQuery({ query: '(max-width:768px)' });
//     return (
//         <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
//             <HeroLights />

//             <OrbitControls
//                 enablePan={false}
//                 enableZoom={!isTablet}
//                 maxDistance={20}
//                 minDistance={5}
//                 minPolarAngle={Math.PI / 5}
//                 maxPolarAngle={Math.PI / 2}
//             />

// <Particles count={100}/>
//             <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]} rotation={[0, -Math.PI / 4, 0]}>
//                 <Room />
//             </group>
//         </Canvas>
//     )
// }

// export default HeroExperience




// 3D Model With Mouse Follow and Orbital Control
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import Particles from './Particles'
import * as THREE from 'three'

function MouseFollower({ children, sensitivity = 1, smoothness = 0.1, baseRotation = [0, -Math.PI / 4, 0], orbitControlsRef, returnSpeed = 0.02 }) {
    const groupRef = useRef()
    const mouseRef = useRef({ x: 0, y: 0 })
    const targetRef = useRef({ x: 0, y: 0 })
    const [isUserControlling, setIsUserControlling] = useState(false)
    const [isReturning, setIsReturning] = useState(false)

    
    
    const { camera } = useThree()
    const initialCameraPosition = useRef(new THREE.Vector3(0, 0, 15))
    const initialCameraTarget = useRef(new THREE.Vector3(0, 0, 0))

    // Track mouse movement
    React.useEffect(() => {
        const handleMouseMove = (event) => {
            mouseRef.current = {
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1
            }
        }

        const handleMouseDown = () => {
            setIsUserControlling(true)
            setIsReturning(false)
        }

        const handleMouseUp = () => {
            setIsUserControlling(false)
            setIsReturning(true)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    // Set initial rotation
    React.useEffect(() => {
        if (groupRef.current) {
            groupRef.current.rotation.set(...baseRotation)
        }
    }, [baseRotation])

    // Smoothly interpolate rotation and camera
    useFrame(() => {
        if (!groupRef.current || !orbitControlsRef?.current) return

        if (isReturning) {
            // Smoothly return camera to initial position with custom speed
            camera.position.lerp(initialCameraPosition.current, returnSpeed)
            
            const currentTarget = orbitControlsRef.current.target
            currentTarget.lerp(initialCameraTarget.current, returnSpeed)
            orbitControlsRef.current.update()

            // Check if camera is close enough to initial position
            const cameraDistance = camera.position.distanceTo(initialCameraPosition.current)
            const targetDistance = currentTarget.distanceTo(initialCameraTarget.current)
            
            if (cameraDistance < 0.01 && targetDistance < 0.01) {
                setIsReturning(false)
            }
        }

        if (!isUserControlling) {
            // Follow mouse
            targetRef.current.x = -mouseRef.current.y * sensitivity * 0.3
            targetRef.current.y = mouseRef.current.x * sensitivity * 0.5

            // Smooth interpolation back to base rotation + mouse offset
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                targetRef.current.x + baseRotation[0],
                smoothness
            )
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                targetRef.current.y + baseRotation[1],
                smoothness
            )
            groupRef.current.rotation.z = THREE.MathUtils.lerp(
                groupRef.current.rotation.z,
                baseRotation[2],
                smoothness
            )
        }
    })

    return <group ref={groupRef}>{children}</group>
}

function CustomOrbitControls({ isTablet, controlsRef }) {
    return (
        <OrbitControls
            ref={controlsRef}
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            enableDamping={true}
            dampingFactor={0.05}
            makeDefault
        />
    )
}

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width:1024px)' })
    const isMobile = useMediaQuery({ query: '(max-width:768px)' })
    const orbitControlsRef = useRef()
    
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <HeroLights />
            <Particles count={100} />
            
            <CustomOrbitControls 
                isTablet={isTablet}
                controlsRef={orbitControlsRef}
            />
            
            <MouseFollower 
                sensitivity={isMobile ? 0.5 : 1} 
                smoothness={0.1}
                baseRotation={[0, -Math.PI / 4, 0]}
                orbitControlsRef={orbitControlsRef}
                returnSpeed={0.05} // Adjust this for smoother return (lower = smoother)
            >
                <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]}>
                    <Room />
                </group>
            </MouseFollower>
        </Canvas>
    )
}

export default HeroExperience