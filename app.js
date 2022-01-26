//THIS IS JUST FOR THE BACKGROUND SCENE NO NAVIGATION SHOULD TAKE PLACE HERE
//create Our Scene we are using our canvas as root 
const scene = new THREE.Scene();

//rendering 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
    canvas:document.querySelector("#root"),
});
renderer.setSize( window.innerWidth, window.innerHeight );

//Add Light
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

//add background
const Bloader = new THREE.TextureLoader();
const bgTexture = Bloader.load('./trty.jpg');
scene.background = bgTexture;
window.flight_diry = 0;
window.flight_dirx = 0;
//Movement 
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        //alert('Left was pressed');
        flight_dirx=-1
    }
    else if(event.keyCode == 39) {
        //alert('Right was pressed');
        flight_dirx=1
    }
});
document.addEventListener('keyup', function(event) {
    if(event.keyCode == 37) {
      //  alert('Left was pressed');
        flight_dirx=0
    }
    else if(event.keyCode == 39) {
        //alert('Right was pressed');
        flight_dirx=0
    }
});


// position camera
camera.position.z = 400;
camera.position.y = 150;

//Add fog
scene.fog = new THREE.Fog(0x00000, 100, 1000);

//const mesh = new THREE.Mesh( geometry, material );
const meshArray = [];
let loader = new THREE.GLTFLoader();

function spawnCity(){
    loader.load("TestExportCity.glb", function(gltf){
        let model = gltf.scene
        scene.add(model)
        meshArray.push(model);

    })
}
function addCity(){
    loader.load("TestExportCity.glb", function(gltf){
        let model = gltf.scene
        scene.add(model)
        meshArray.push(model)
        model.position.z=-990

    })

}

spawnCity()
addCity()

function animate() {
    if (flight_dirx){
        if (camera.position.x >= 500){
            camera.position.x = 500
        }
        if (camera.position.x < -500){
            camera.position.x = -500
        }
        camera.position.x += flight_dirx
    }
    if (flight_diry){
        if (camera.position.y >= 500){
            camera.position.y = 500
        }
        if (camera.position.y < 20){
            camera.position.y = 20
        }
        camera.position.y += flight_diry
    }
    if(meshArray.length){
        for(let i=0;i<meshArray.length;i++){
           meshArray[i].position.z += 1
           if (meshArray[i].position.z > 990){
               meshArray[i].position.z = -990
           }
        }
 }

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();