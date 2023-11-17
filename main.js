import * as THREE from 'three'

const scene = new THREE.Scene() //创建场景
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) //创建相机
const renderer = new THREE.WebGLRenderer() //渲染器
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1) //创建一个几何体
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ) //给几何体上色
const cube = new THREE.Mesh(geometry, material)

const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( lineGeometry, lineMaterial );
scene.add(line)
// scene.add(cube)

camera.position.z = 5

function animate() {
  requestAnimationFrame (animate)
  // cube.rotation.x += 0.1
  // cube.rotation.y += 0.1
  // cube.rotation.z += 0.1
  renderer.render(scene, camera)
}

animate()
