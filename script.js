// scripts.js
function rotate3D(id) {
  var element = document.getElementById(id);
  element.style.transform = "rotateY(180deg)";
}

function reset3D(id) {
  var element = document.getElementById(id);
  element.style.transform = "rotateY(0deg)";
}

// Placeholder for 3D rendering (You can load actual 3D models here with Three.js)
function load3DModel(id) {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(300, 300); // set appropriate size for 3D area
  document.getElementById(id).appendChild(renderer.domElement);
  
  // Load 3D Model (Here, use a placeholder or a real GLTF model)
  var loader = new THREE.GLTFLoader();
  loader.load('path/to/your/model.glb', function (gltf) {
    scene.add(gltf.scene);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      gltf.scene.rotation.x += 0.01;
      gltf.scene.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  });
}
