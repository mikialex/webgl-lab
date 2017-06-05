var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add(cube);

directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(0, 0, 350);
directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(directionalLight);

camera.position.z = 5;


// instantiate a loader
var loader = new THREE.OBJLoader();
var teapot;
// load a resource
loader.load(
    // resource URL
    'static/teapot.obj',
    // Function when resource is loaded
    function ( object ) {
        teapot=object 
        scene.add(teapot);
        render();
    }
);

var render = function () {
    requestAnimationFrame( render );

    cube.rotation.z += 0.01;
    teapot.rotation.y += 0.01;
    teapot.rotation.x += 0.01;

    renderer.render(scene, camera);
};

