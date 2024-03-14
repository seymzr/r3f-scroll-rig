import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

export const useTransformation = (ref1, ref2, ref3, random) => {
  const [ref1Positions, setRef1Positions] = useState({})
  const [ref2Positions, setRef2Positions] = useState({})
  const [ref3Positions, setRef3Positions] = useState({})
  const [randomPositions, setRandomPositions] = useState({})
  const purple = new THREE.Color('#8734F1')
  const orange = new THREE.Color('#FF7B25')
  const white = new THREE.Color('#ffffff')
  const enableRotation = true
  const isMobile = window.innerWidth <= 768
  useEffect(() => {
    if (ref1 && ref1.current) {
      ref1.current.children.forEach((item, index) => {
        setRef1Positions((prevState) => ({
          ...prevState,
          [index]: item.position
        }))
      })
      ref1.current.originalPosition = ref1.current.position.clone()
      ref1.current.originalRotation = ref1.current.rotation.clone()
    }

    if (ref2 && ref2.current) {
      const collectMeshes = (parent) => {
        parent?.children.forEach((child, index) => {
          if (child instanceof THREE.Mesh) {
            // If the child is a mesh, add it to the meshes array
            setRef2Positions((prevState) => ({
              ...prevState,
              [index]: child.position
            }))
          } else if (child instanceof THREE.Group) {
            // If the child is a group, recursively call collectMeshes
            collectMeshes(child)
          }
          // Ignore other types of objects like lights, cameras, etc.
        })
      }

      collectMeshes(ref2.current)
      /* ref2.current.children.forEach((item, index) => {
        setRef2Positions((prevState) => ({
          ...prevState,
          [index]: item.position,
        }));
      }); */
    }
    if (ref3 && ref3.current) {
      const collectMeshes = (parent) => {
        parent?.children.forEach((child, index) => {
          if (child instanceof THREE.Mesh) {
            // If the child is a mesh, add it to the meshes array
            setRef3Positions((prevState) => ({
              ...prevState,
              [index]: child.position
            }))
          } else if (child instanceof THREE.Group) {
            // If the child is a group, recursively call collectMeshes
            collectMeshes(child)
          }
          // Ignore other types of objects like lights, cameras, etc.
        })
      }

      collectMeshes(ref3.current)
      /* ref2.current.children.forEach((item, index) => {
        setRef2Positions((prevState) => ({
          ...prevState,
          [index]: item.position,
        }));
      }); */
    }
    if (random && random.current) {
      const collectMeshes = (parent) => {
        parent?.children.forEach((child, index) => {
          if (child instanceof THREE.Mesh) {
            // If the child is a mesh, add it to the meshes array
            setRandomPositions((prevState) => ({
              ...prevState,
              [index]: child.position
            }))
          } else if (child instanceof THREE.Group) {
            // If the child is a group, recursively call collectMeshes
            collectMeshes(child)
          }
          // Ignore other types of objects like lights, cameras, etc.
        })
      }

      collectMeshes(random.current)
    }
  }, [ref1, ref2, ref3, random])

  useEffect(() => {
    // Assuming ref1 and ref1.current exist
    const groupWorldPosition = new THREE.Vector3()
    ref1.current.getWorldPosition(groupWorldPosition)

    ref1.current.children.forEach((mesh) => {
      mesh.originalPosition = mesh.position.clone()
      const meshWorldPosition = new THREE.Vector3()
      mesh.getWorldPosition(meshWorldPosition)

      mesh.directionVector = meshWorldPosition.clone().add(groupWorldPosition).normalize()

      mesh.originalRotation = mesh.rotation.clone()
      mesh.targetRotation = new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)

      mesh.targetPosition = new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)

      mesh.random1 = Math.random() * 2
      mesh.random2 = Math.random() * 2.5
      mesh.random3 = Math.random() * 1
    })
  }, [ref1])

  useFrame((state, delta) => {
    ref1.current.children.forEach((mesh) => {
      mesh.rotation.y += delta * 0.3
    })
    if (scrollData.offset < 0.2) {
      ref1.current.children.forEach((mesh, index) => {
        if (randomPositions[index]) {
          // mesh.targetPosition = ref2Positions[index+5000].clone();
          mesh.targetPosition.x = randomPositions[index].clone().x * 5
          mesh.targetPosition.y = randomPositions[index].clone().y * 5
          mesh.targetPosition.z = randomPositions[index].clone().z * 5
        }
      })
    } else if (scrollData.offset < 0.5) {
      ref1.current.children.forEach((mesh, index) => {
        if (ref2Positions[index]) {
          // mesh.targetPosition = ref2Positions[index+5000].clone();
          mesh.targetPosition.x = ref2Positions[index].clone().x
          mesh.targetPosition.y = ref2Positions[index].clone().y
          mesh.targetPosition.z = ref2Positions[index].clone().z
        }
      })
    } else {
      ref1.current.children.forEach((mesh, index) => {
        if (ref3Positions[index]) {
          // mesh.targetPosition = ref2Positions[index+5000].clone();
          mesh.targetPosition.x = ref3Positions[index].clone().x
          mesh.targetPosition.y = ref3Positions[index].clone().y
          mesh.targetPosition.z = ref3Positions[index].clone().z
        }
      })
    }
  })

  const scrollData = useScroll()

  useFrame(() => {
    if (scrollData.offset < 0.6 && scrollData.offset > 0.4&&!isMobile) {
      if (scrollData.offset < 0.45) {
        const rotationProgress = (scrollData.offset - 0.4) / 0.07 // Normalize the progress
        ref1.current.rotation.y = THREE.MathUtils.lerp(0, -Math.PI / 2, rotationProgress)
      } else {
        const rotationProgress = (scrollData.offset - 0.4) / 0.2 // Normalize the progress
        ref1.current.rotation.y = THREE.MathUtils.lerp(-Math.PI / 2, 0, rotationProgress)
      }

      if (!isMobile) {
        ref1.current.position.x = THREE.MathUtils.lerp(2, -2, (scrollData.offset - 0.4) / 0.1)
      }
    }
    if (!isMobile && scrollData.offset < 1 && scrollData.offset > 0.8) {
      ref1.current.position.x = THREE.MathUtils.lerp(-2, 2, (scrollData.offset - 0.8) / 0.2)
    }
    if (!isMobile) {
      if (scrollData.offset < 0.2) {
        // First 20% of the scroll (scale up)
        const scaleProgress = scrollData.offset / 0.2; // Normalize the progress
        ref1.current.scale.setScalar(THREE.MathUtils.lerp(2, 7, scaleProgress));
        ref1.current.position.x = THREE.MathUtils.lerp(ref1.current.originalPosition.x, 2, scaleProgress);
      } else if (scrollData.offset < 0.4) {
        // 20% to 40% of the scroll (scale down)
        const scaleProgress = (scrollData.offset - 0.2) / 0.2; // Normalize the progress
        ref1.current.scale.setScalar(THREE.MathUtils.lerp(7, 4, scaleProgress));
        ref1.current.position.x = THREE.MathUtils.lerp(ref1.current.position.x, 2, scaleProgress);
      } else if (scrollData.offset < 0.6) {
        // 40% to 60% of the scroll (maintain scale)
        const scaleProgress = (scrollData.offset - 0.4) / 0.2; // Normalize the progress
        ref1.current.scale.setScalar(4); // Maintain scale
        ref1.current.position.x = THREE.MathUtils.lerp(ref1.current.position.x, -2, scaleProgress);
      } else if (scrollData.offset < 0.8) {
        // 60% to 80% of the scroll (scale up)
        const scaleProgress = (scrollData.offset - 0.6) / 0.2; // Normalize the progress
        ref1.current.scale.setScalar(THREE.MathUtils.lerp(4, 5, scaleProgress));
      } else if (scrollData.offset < 0.9) {
        // 80% to 90% of the scroll (scale down)
        const scaleProgress = (scrollData.offset - 0.8) / 0.1; // Normalize the progress
        ref1.current.scale.setScalar(THREE.MathUtils.lerp(5, 1.5, scaleProgress));
      } else {
        // Last 10% of the scroll (scale down)
        const scaleProgress = (scrollData.offset - 0.9) / 0.1; // Normalize the progress
        ref1.current.scale.setScalar(THREE.MathUtils.lerp(1.5, 0.6, scaleProgress));
      }
    }
    else {
      if (scrollData.offset < 0.2) {
        // First 20% of the scroll (scale up)
        const scaleProgress = scrollData.offset / 0.2 // Normalize the progress
        ref1.current.scale.setScalar(THREE.MathUtils.lerp(1.5, 4, scaleProgress))
        if (!isMobile) {
          ref1.current.position.x = THREE.MathUtils.lerp(ref1.current.originalPosition.x, 2, scaleProgress)
        }
      } else if (scrollData.offset < 0.4) {
        // 20% to 40% of the scroll (scale down)
        const scaleProgress = (scrollData.offset - 0.2) / 0.2 // Normalize the progress
        ref1.current.scale.setScalar(THREE.MathUtils.lerp(4, 3, scaleProgress))
        if (!isMobile) {
          ref1.current.position.x = THREE.MathUtils.lerp(ref1.current.position.x, 2, scaleProgress)
        }
      } else if (scrollData.offset < 0.6) {
        const scaleProgress = (scrollData.offset - 0.4) / 0.2
        ref1.current.scale.setScalar(THREE.MathUtils.lerp(3, 3, scaleProgress))
        if (!isMobile) {
          ref1.current.position.x = THREE.MathUtils.lerp(ref1.current.position.x, -2, (scrollData.offset - 0.4) / 0.2)
        }
      } else if (scrollData.offset < 0.8) {
        // 40% to 80% of the scroll (scale up)
        const scaleProgress = (scrollData.offset - 0.6) / 0.2 // Normalize the progress
        //ref1.current.position.x = THREE.MathUtils.lerp(ref1.current.position.x,1,scaleProgress/2)
        ref1.current.scale.setScalar(THREE.MathUtils.lerp(3, 4, scaleProgress))
      } else {
        // Last 20% of the scroll (scale down)
        const scaleProgress = (scrollData.offset - 0.8) / 0.2 // Normalize the progress
        ref1.current.scale.setScalar(THREE.MathUtils.lerp(4, 0.4, scaleProgress))
        // ref1.current.position.y = THREE.MathUtils.lerp(ref1.current.position.y,-1.5,scaleProgress)
        //ref1.current.position.x = THREE.MathUtils.lerp(ref1.current.position.x,2.5,scaleProgress)
        //ref1.current.position.x = THREE.MathUtils.lerp(ref1.current.position.x,2,scaleProgress)
      }
      
    }


    ref1.current.children.forEach((mesh, index) => {
      //scaling the meshes

      if (scrollData.offset < 0.2) {
        // First 20% of the scroll (scale up)
        const scaleProgress = scrollData.offset / 0.2 // Normalize the progress
        mesh.scale.setScalar(THREE.MathUtils.lerp(0.061, 0.01, scaleProgress))
      } else if (scrollData.offset < 0.4) {
        // 20% to 40% of the scroll (scale down)
        const scaleProgress = (scrollData.offset - 0.2) / 0.2 // Normalize the progress
        mesh.scale.setScalar(THREE.MathUtils.lerp(0.01, 0.02, scaleProgress))
      }
      else if(scrollData.offset<0.6){
        const scaleProgress = (scrollData.offset-0.4)/0.2
        mesh.scale.setScalar(THREE.MathUtils.lerp(0.02,0.02,scaleProgress))
      }
      else if (scrollData.offset < 0.8) {
        // 40% to 80% of the scroll (scale up)
        const scaleProgress = (scrollData.offset - 0.4) / 0.4 // Normalize the progress
        mesh.scale.setScalar(THREE.MathUtils.lerp(0.02, 0.02, scaleProgress))
      } else {
        // Last 20% of the scroll (scale down)
        const scaleProgress = (scrollData.offset - 0.8) / 0.2 // Normalize the progress
        mesh.scale.setScalar(THREE.MathUtils.lerp(0.02, 0.06, scaleProgress))
      }

      if (mesh.material) {
       
        /* const orangeProgress = Math.min(((scrollData.offset) - 0.2)/0.6, 1) // Progress for transitioning from orange to white
        const purpleProgress = Math.min((scrollData.offset - 0.4) / 0.6, 1) // Progress for transitioning from white to purple

        const lerpedColor = new THREE.Color().lerpColors(orange, white, orangeProgress).lerp(purple, purpleProgress)

        mesh.material.color.copy(lerpedColor) */


        const colorStart = scrollData.offset < 0.4 ? orange : white;
const colorEnd = scrollData.offset < 0.4 ? white : purple;
const progress = scrollData.offset < 0.4 ? scrollData.offset / 0.4 : (scrollData.offset - 0.4) / 0.6; // Normalize progress
const smoothProgress = Math.sin(progress * Math.PI * 0.5); // Apply easing function for smoother transition
const lerpedColor = new THREE.Color().lerpColors(colorStart, colorEnd, smoothProgress);
mesh.material.color.copy(lerpedColor);

      }

      if (scrollData.offset < 0.2) {
        // Smoothly interpolate from original position to random position
        if (randomPositions[index]) {
          mesh.position.x = THREE.MathUtils.lerp(
            mesh.originalPosition.x,
            randomPositions[index].x,
            scrollData.offset * 5 // Adjust the speed of interpolation as needed for smoother transition
          )
          mesh.position.y = THREE.MathUtils.lerp(mesh.originalPosition.y, randomPositions[index].y, scrollData.offset * 5)
          mesh.position.z = THREE.MathUtils.lerp(mesh.originalPosition.z, randomPositions[index].z, scrollData.offset * 5)
        }
      } else if (scrollData.offset < 0.4) {
        // Smoothly interpolate between random position and reference 2 position
        if (randomPositions[index] && ref2Positions[index]) {
          mesh.position.x = THREE.MathUtils.lerp(
            randomPositions[index].x,
            ref2Positions[index].x,
            (scrollData.offset - 0.2) * 5 // Adjust the speed of interpolation as needed for smoother transition
          )
          mesh.position.y = THREE.MathUtils.lerp(randomPositions[index].y, ref2Positions[index].y, (scrollData.offset - 0.2) * 5)
          mesh.position.z = THREE.MathUtils.lerp(randomPositions[index].z, ref2Positions[index].z, (scrollData.offset - 0.2) * 5)
        }
      } else if (scrollData.offset < 0.6) {
        // Stay at reference 2 position
        if (ref2Positions[index]) {
          mesh.position.x = ref2Positions[index].x
          mesh.position.y = ref2Positions[index].y
          mesh.position.z = ref2Positions[index].z
        }
      } else if (scrollData.offset < 0.8) {
        // Smoothly interpolate between reference 2 position and random position
        if (ref2Positions[index] && randomPositions[index]) {
          mesh.position.x = THREE.MathUtils.lerp(
            ref2Positions[index].x,
            randomPositions[index].x,
            (scrollData.offset - 0.6) * 5 // Adjust the speed of interpolation as needed for smoother transition
          )
          mesh.position.y = THREE.MathUtils.lerp(ref2Positions[index].y, randomPositions[index].y, (scrollData.offset - 0.6) * 5)
          mesh.position.z = THREE.MathUtils.lerp(ref2Positions[index].z, randomPositions[index].z, (scrollData.offset - 0.6) * 5)
        }
      } else  {
        // Smoothly interpolate between random position and reference 3 position
        if (mesh.material && randomPositions[index] && ref3Positions[index]) {
          mesh.position.x = THREE.MathUtils.lerp(
            randomPositions[index].x,
            ref3Positions[index].x,
            (scrollData.offset - 0.8) * 5 // Adjust the speed of interpolation as needed for smoother transition
          )
          mesh.position.y = THREE.MathUtils.lerp(randomPositions[index].y, ref3Positions[index].y, (scrollData.offset - 0.8) * 5)
          mesh.position.z = THREE.MathUtils.lerp(randomPositions[index].z, ref3Positions[index].z, (scrollData.offset - 0.8) * 5)
        }
      }
    })
  })
}
