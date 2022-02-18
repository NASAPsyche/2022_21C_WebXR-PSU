const THREE = require('three');
const {STLLoader} = require("three/examples/jsm/loaders/STLLoader");

//get physical specifications from user and create a planet with them
function createPlanet( radius, widthSegments, heightSegments, xPosition, yPosition, zPosition, material){

    //check that radius is greater than zero
    if(radius <= 0)
        throw("Invalid radius");

    //create initial geometry and material
    let planetGeo = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    //create mesh out of geometry and material
    let planet = new THREE.Mesh(planetGeo, material);

    //set specified position
    planet.position.set(xPosition, yPosition, zPosition);

    //return created planet
    return planet;
}

function createMesh(type, material){
    let planetMaterial = null;

    if(type == 'texture'){
        planetMaterial = new THREE.MeshStandardMaterial({map: material});
    }
    else if(type == 'color'){
        planetMaterial = new THREE.MeshStandardMaterial({color: material});
    }
    else{
        planetMaterial = new THREE.MeshBasicMaterial({color: material});
    }

    return planetMaterial;
}

function createSTL(path, xPos, yPos, zPos, material){
    const loader = new STLLoader();
    let stlMesh = null;
    loader.load(
        path,
        function (geometry) {
            stlMesh = new THREE.Mesh(geometry, material);
            stlMesh.position.set(xPos, yPos, zPos);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (error) => {
            console.log(error);
        }
    )

    return stlMesh;
}

function attachCard(){

}

function createCard(){

}



module.exports = {
    createSTL,
    createPlanet,
    createMesh
}