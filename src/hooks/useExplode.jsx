import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

import * as THREE from "three";

export const useExplode = (group, { distance = 3, enableRotation = true }) => {
  const purple = new THREE.Color('#8734F1')
  const orange = new THREE.Color('#FF7B25')
  const white = new THREE.Color('#ffffff')
  useEffect(() => {
    const groupWorldPosition = new THREE.Vector3();
    group.current.getWorldPosition(groupWorldPosition);

    group.current.children.forEach((mesh) => {
      mesh.originalPosition = mesh.position.clone();
      const meshWorldPosition = new THREE.Vector3();
      mesh.getWorldPosition(meshWorldPosition);

      mesh.directionVector = meshWorldPosition
        .clone()
        .add(groupWorldPosition)
        .normalize();

      mesh.originalRotation = mesh.rotation.clone();
      mesh.targetRotation = new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      /* mesh.targetPosition = new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ) */
    });
  }, []);

  useEffect(() => {
    group.current.children.forEach((mesh) => {
      mesh.targetPosition = mesh.originalPosition
        .clone()
        .add(mesh.directionVector.clone().multiplyScalar(distance));
        mesh.targetPosition = new THREE.Euler(
          2*Math.random() * Math.PI,
          2*Math.random() * Math.PI,
          2*Math.random() * Math.PI
        )
      //mesh.targetPosition.x += mesh.targetPosition.x<0?-window.innerHeight:window.innerWidth;
      //mesh.targetPosition.y += mesh.targetPosition.y<0?-window.innerHeight:window.innerHeight;
      //mesh.targetPosition.z +-mesh.targetPosition.x<0?-window.innerWidth:window.innerWidth
    });
  }, [distance]);

  const scrollData = useScroll();

  /* useFrame(() => {
    group.current.children.forEach((mesh) => {
      if (scrollData.offset < 0.0001) {
        if (mesh.name === "origin") {
          mesh.visible = true;
        } else {
          mesh.visible = true;
        }
      } else {
        if (mesh.name === "origin") {
          mesh.visible = false;
        } else {
          mesh.visible = true;
        }
      }

      mesh.position.x = THREE.MathUtils.lerp(
        mesh.originalPosition.x,
        mesh.targetPosition.x,
        scrollData.offset // 0 at the beginning and 1 after scroll
      );
      mesh.position.y = THREE.MathUtils.lerp(
        mesh.originalPosition.y,
        mesh.targetPosition.y,
        scrollData.offset // 0 at the beginning and 1 after scroll
      );
       mesh.position.z = THREE.MathUtils.lerp(
        mesh.originalPosition.z,
        mesh.targetPosition.z,
        scrollData.offset // 0 at the beginning and 1 after scroll
      ); 

       if (enableRotation) {
        mesh.rotation.x = THREE.MathUtils.lerp(
          mesh.originalRotation.x,
          mesh.targetRotation.x,
          scrollData.offset // 0 at the beginning and 1 after scroll
        );
        mesh.rotation.y = THREE.MathUtils.lerp(
          mesh.originalRotation.y,
          mesh.targetRotation.y,
          scrollData.offset // 0 at the beginning and 1 after scroll
        );
        mesh.rotation.z = THREE.MathUtils.lerp(
          mesh.originalRotation.z,
          mesh.targetRotation.z,
          scrollData.offset // 0 at the beginning and 1 after scroll
        );
      } 
    });
  }); */
  useFrame((state) => {
    const {camera} = state;
    // console.log(camera)
    // Sort meshes based on their vertical positions
    const sortedMeshes = group.current.children.sort((a, b) => {
      return a.position.y - b.position.y
    });
  
    sortedMeshes.forEach((mesh, index) => {
      const normalizedOffset = scrollData.offset * (1 - index / sortedMeshes.length);
      // console.log(mesh)
      if (mesh.material) {
        // Lerp between orange and purple based on scrollData.offset
        const lerpedColor = new THREE.Color().lerpColors(orange, purple, scrollData.offset);

        // Update material color
        mesh.material.color.copy(lerpedColor);
    }
      mesh.position.x = THREE.MathUtils.lerp(
        mesh.originalPosition.x,
        mesh.targetPosition.x,
        scrollData.offset
      );
      mesh.position.y = THREE.MathUtils.lerp(
        mesh.originalPosition.y,
        mesh.targetPosition.y,
        scrollData.offset
      );
      mesh.position.z = THREE.MathUtils.lerp(
        mesh.originalPosition.z,
        mesh.targetPosition.z,
        scrollData.offset
      );
  
      if (enableRotation) {
        mesh.rotation.x = THREE.MathUtils.lerp(
          mesh.originalRotation.x,
          mesh.targetRotation.x,
          normalizedOffset
        );
        mesh.rotation.y = THREE.MathUtils.lerp(
          mesh.originalRotation.y,
          mesh.targetRotation.y,
          normalizedOffset
        );
        mesh.rotation.z = THREE.MathUtils.lerp(
          mesh.originalRotation.z,
          mesh.targetRotation.z,
          normalizedOffset
        );
      }
    });
  });
  /* useFrame(() => {
    // Sort meshes based on their vertical positions
    const sortedMeshes = group.current.children.sort((a, b) => {
        return b.position.y - a.position.y; // Sort by ascending z position
    });
  
    sortedMeshes.forEach((mesh, index) => {
        const normalizedOffset = index / sortedMeshes.length; // Normalized offset from 0 to 1
  
        // Calculate movement offsets based on normalizedOffset
        const movementOffset = scrollData.offset * normalizedOffset;
        
        mesh.position.x = THREE.MathUtils.lerp(
          mesh.originalPosition.x,
          mesh.targetPosition.x,
          scrollData.offset
        )
        mesh.position.y = THREE.MathUtils.lerp(
          mesh.originalPosition.y,
          mesh.originalPosition.y,
          scrollData.offset
        )
        mesh.position.z = THREE.MathUtils.lerp(
          mesh.originalPosition.z,
          mesh.targetPosition.z,
          scrollData.offset
        )
  
        // Move along z-axis based on movementOffset
        // mesh.position.z = mesh.originalPosition.z + movementOffset;
  
        // Move left and right based on index
        const horizontalOffset = Math.sin(normalizedOffset * Math.PI * 2); // Adjust maxHorizontalOffset as needed
        // mesh.position.x = mesh.originalPosition.x + horizontalOffset;
  
        // Move up and down based on index
        const verticalOffset = Math.cos(normalizedOffset * Math.PI * 2); // Adjust maxVerticalOffset as needed
        // mesh.position.y = mesh.originalPosition.y + verticalOffset;
  
        if (enableRotation) {
            // Apply rotation if enabled
            mesh.rotation.x = THREE.MathUtils.lerp(
                mesh.originalRotation.x,
                mesh.targetRotation.x,
                normalizedOffset
            );
            mesh.rotation.y = THREE.MathUtils.lerp(
                mesh.originalRotation.y,
                mesh.targetRotation.y,
                normalizedOffset
            );
            mesh.rotation.z = THREE.MathUtils.lerp(
                mesh.originalRotation.z,
                mesh.targetRotation.z,
                normalizedOffset
            );
        }
    });
}); */

 
  
  
  
};
