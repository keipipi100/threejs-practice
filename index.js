const init = () => {

  const width = 960;
  const height = 540;

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  const scene = new THREE.Scene();

  var axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  var size = 100;
  var divisions = 100;
  var gridHelper = new THREE.GridHelper(size, divisions);
  scene.add(gridHelper);

  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(15, 15, 15);
  camera.lookAt(new THREE.Vector3(0, 0, 0))

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.2;

  const box = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 5),
    new THREE.MeshNormalMaterial({ wireframe: true }),
  );
  scene.add(box)

  const tick = () => {
    controls.update();
    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  }
  tick();
}

window.addEventListener('load', init);