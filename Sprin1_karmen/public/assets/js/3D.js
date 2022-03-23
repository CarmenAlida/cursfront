import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";
import { GLTFLoader } from "./GLTFLoader.js";
import { RGBELoader } from "./RGBELoader.js";
//Three.js Objects
let cameraObject,
  sceneObject,
  rendererObject,
  loaderObject,
  RGBEObject,
  carObject;
let rimObjects = [];
let tireObjects = [];
let wheelPos = [];
let toPaint = [];
//UI Elements
let redButton, silverButton, whiteButton;
let tire1Button, tire2Button, tire3Button;
let rim1Button, rim2Button, rim3Button,rim4Button, rim5Button, rim6Button, rim7Button;
let isBackgroundButton, backgroundButton1, backgroundButton2, backgroundButton3;
let helpButton;
let canvasDiv;
//Config
let width = window.innerWidth;
let height = window.innerHeight / 1.5;
let nombreFichero;
let nombreCocheFichero;
let modelsPath = "./assets/models/";
let texturesPath = "./assets/textures/";
//Camara config
let fov = 50;
let near = 0.25;
let far = 40;
let cameraPosition = { x: 20, y: 0, z: 3 };
//Control config
let minDistance = 2;
let maxDistance = 30;
let targetPos = { x: 0, y: 0, z: -0.2 };
//Renderer config
let rendererSettings = { antialias: true, alpha: true };
//Background config
let backgroundFiles = [
  "quattro_canti_4k.hdr",
  "venice_sunrise_4k.hdr",
  "shanghai_bund_4k.hdr",
];
let backgroundSelected = 0;
let isBackground = true;

init();
function screen() {
  rendererObject.render(sceneObject, cameraObject);
  rendererObject.domElement.toBlob(function (blob) {
    var a = document.createElement('a');
    var url = URL.createObjectURL(blob);
    a.href = url;
    a.download = 'canvas.png';
    a.click();
  }, 'image/png', 1.0);



}
function init() {
  setLoaders();
  setBackground();
  setCanvas();
  setScene();
  setUI();
  setControls();
  loadCar();
  render();
}
function setLoaders() {
  loaderObject = new GLTFLoader();
  loaderObject.setPath(modelsPath);
  RGBEObject = new RGBELoader();
  RGBEObject.setPath(texturesPath);
}
function setBackground() {
  if (!isBackground) {
    sceneObject.background = new THREE.Color( "white" );
    render();
    return;
  }
  RGBEObject.load(backgroundFiles[backgroundSelected], function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    sceneObject.background = isBackground ? texture : null;
    sceneObject.environment = texture;
    render();
  });
}
function setScene() {
  cameraObject = new THREE.PerspectiveCamera(fov, width / height, near, far);
  cameraObject.position.set(
    cameraPosition.x,
    cameraPosition.y,
    cameraPosition.z
  );
  sceneObject = new THREE.Scene();
}
function setCanvas() {
  canvasDiv = document.getElementById("canvas");
  rendererSettings.canvas = canvasDiv;
  rendererObject = new THREE.WebGLRenderer(rendererSettings);
  rendererObject.setPixelRatio(width / height);
  rendererObject.setSize(width, height);
  rendererObject.toneMapping = THREE.ACESFilmicToneMapping;
  rendererObject.toneMappingExposure = 1.3;
  rendererObject.outputEncoding = THREE.sRGBEncodingC;
  window.addEventListener("resize", onWindowResize);
}
function onWindowResize() {
  width = window.innerWidth;
  height = window.innerHeight / 1.5;
  cameraObject.aspect = width / height;
  cameraObject.updateProjectionMatrix();
  rendererObject.setSize(width, height);
  render();
}
function setUI() {
  redButton = document.getElementById("redButton");
  silverButton = document.getElementById("silverButton");
  whiteButton = document.getElementById("whiteButton");
  tire1Button = document.getElementById("tire1Button");
  tire2Button = document.getElementById("tire2Button");
  tire3Button = document.getElementById("tire3Button");
  rim1Button = document.getElementById("rim1Button");
  rim2Button = document.getElementById("rim2Button");
  rim3Button = document.getElementById("rim3Button");
  rim4Button = document.getElementById("rim4Button");
  rim5Button = document.getElementById("rim5Button");
  rim6Button = document.getElementById("rim6Button");
  rim7Button = document.getElementById("rim7Button");
  isBackgroundButton = document.getElementById("isBackground");
  backgroundButton1 = document.getElementById("background1");
  backgroundButton2 = document.getElementById("background2");
  backgroundButton3 = document.getElementById("background3");
  isBackgroundButton = document.getElementById("isBackground");
 // helpButton = document.getElementById("help");
  let tiresButtons = [tire1Button, tire2Button, tire3Button];
  let colorsButtons = [redButton, silverButton, whiteButton];
  let rimsButtons = [rim1Button, rim2Button, rim3Button/*,rim4Button, rim5Button, rim6Button, rim7Button*/];
  let backgroundButtons = [
    backgroundButton1,
    backgroundButton2,
    backgroundButton3,
  ];

 /* helpButton.addEventListener("click", () => {
    console.log(sceneObject);
  });*/
  isBackgroundButton.addEventListener("click", () => {
    isBackground = !isBackground;
    setBackground();
    /*  screen();*/
  });
  backgroundButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      backgroundSelected = event.target.id[event.target.id.length - 1] - 1;
      setBackground();
    });
  });
  colorsButtons.forEach((color) => {
    color.addEventListener("click", (event) => {
      changeColor(event.target.value);
    });
  });
  tiresButtons.forEach((tire) => {
    tire.addEventListener("click", (event) => {
      let nombreTire = event.target.alt + ".glb";
      removeTire();
      loadTire(nombreTire);
    });
  });
  rimsButtons.forEach((rim) => {
    rim.addEventListener("click", (event) => {
      let nombreRim = event.target.alt + ".glb";
      removeRim();
      loadRim(nombreRim);
    });
  });
}
function setControls() {
  const controls = new OrbitControls(cameraObject, rendererObject.domElement);
  controls.addEventListener("change", render);
  controls.minDistance = minDistance;
  controls.maxDistance = maxDistance;
  controls.target.set(targetPos.x, targetPos.y, targetPos.z);
  controls.enableZoom = false;
  controls.update();
}
function getPrameters() {
  let id = new URLSearchParams(window.location.search).get("id");
  let obj = { id: id };
  return obj;
}
function loadCar() {
  if (getPrameters().id == undefined) {
    nombreCocheFichero = "car1.glb";
  } else {
    nombreCocheFichero = getPrameters().id + ".glb";
  }
  loaderObject.load(
    nombreCocheFichero,
    function (gltf) {
      gltf.scene.name = nombreCocheFichero;
      carObject = gltf.scene;
      sceneObject.add(carObject);
      carObject.children.forEach((child) => {
        if (child.name == "wheel1" || child.name == "wheel2" || child.name == "wheel3" || child.name == "wheel4") {
          wheelPos.push(child);
        }
      });
      changeColor("red");
      render();
      loadRim("rim1.glb");
      loadTire("tire1.glb");
    },
    function (xhr) {
    
    }
  );
}
function loadRim(nombreFichero) {
  loaderObject.load(
    nombreFichero,
    function (gltf) {
      gltf.scene.name = nombreFichero;
      for (let i = 0; i < 4; i++) {
        let temprim = gltf.scene.clone();
        sceneObject.add(temprim);
        rimObjects[i] = temprim;
        temprim.position.set(...wheelPos[i].position);
    
      }
      render();
    },
    function (xhr) {
    
    }
  );
}
function loadTire(nombreFichero) {
  loaderObject.load(
    nombreFichero,
    function (gltf) {
      gltf.scene.name = nombreFichero;

      for (let i = 0; i < 4; i++) {
        let temptire = gltf.scene.clone();
        sceneObject.add(temptire);
        tireObjects[i] = temptire;
        tireObjects[i].position.set(...wheelPos[i].position);
    
      }

      render();
    },
    function (xhr) {
     
    }
  );
}
function changeColor(colorValue) {
  let color = new THREE.Color(colorValue);
  //car1
  if (nombreCocheFichero == "car1.glb") {

    carObject.children[4].children[1].material.color = color;
    carObject.children[4].children[2].material.color = color;
    carObject.children[4].children[3].material.color = color;
  }
  //car2
  if (nombreCocheFichero == "car2.glb") {
    carObject.children[4].children[1].material.color = color;
  }
  //car3
  if (nombreCocheFichero == "car3.glb") {
    carObject.children[14].children[1].material.color = color;
    carObject.children[1].children[2].children[0].material.color = color;
  }
  render();
}
function removeRim() {
  for (let i = 0; i < 4; i++) {console.log(rimObjects[i]); 
   sceneObject.remove(rimObjects[i]);  

    render();
  }
  for (let i = 0; i < 4; i++) {
    rimObjects.pop();
  }
}
function removeTire() {
  for (let i = 0; i < 4; i++) {
    sceneObject.remove(tireObjects[i]);
    render();
  }
  for (let i = 0; i < 4; i++) {
    tireObjects.pop();
  }
}
function render() {
  rendererObject.render(sceneObject, cameraObject);
}
