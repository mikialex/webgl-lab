var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor (0x888877, 1);
document.body.appendChild( renderer.domElement );

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
camera.position.x = 5;
camera.position.y = 5;
//cube
// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add(cube);
var geometry = new THREE.PlaneGeometry( 20, 20 ,20,20);
var material = new THREE.MeshBasicMaterial( {color: 0x999999, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
scene.add( plane );

var axisHelper = new THREE.AxisHelper( 5 );
scene.add( axisHelper );

//light
directionalLight = new THREE.DirectionalLight(0xffffaa, 0.8);
directionalLight.position.set(0, 0, 5);
directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
var directionalLightHelper = new THREE.DirectionalLightHelper( directionalLight, 5 );
scene.add(directionalLight);
scene.add(directionalLightHelper);

var envlight = new THREE.AmbientLight( 0x404040 );
scene.add(envlight);

var light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 5, 5, 5 );
scene.add(light);
var pointLightHelper = new THREE.PointLightHelper( light, 1 );
scene.add( pointLightHelper );

//controls
controls = new THREE.OrbitControls( camera, renderer.domElement );
// controls.addEventListener('change', render);
controls.enableZoom = true;

// obj teapot
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


//renderloop
var render = function () {
    requestAnimationFrame( render );

    // cube.rotation.z += 0.01;
    // teapot.rotation.y += 0.01;
    // teapot.rotation.x += 0.01;

    renderer.render(scene, camera);
};

