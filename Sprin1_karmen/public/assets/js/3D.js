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
//UI Elements
let redButton, silverButton, whiteButton;
let tire1Button, tire2Button, tire3Button;
let rim1Button, rim2Button, rim3Button;
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
let backgroundSelected = 2;
let isBackground = true;

let carrito = [
  {
    id: 0,
    name: "Halley",
    description:
      "Halley es el resultado de un proceso de perfeccionamiento y consolidación de las características ya existentes, y al mismo tiempo, de desarrollo de nuevas soluciones en términos de presentación y diseño. Pero lo que lo distingue es su velocidad, la capacidad de anticipar los movimientos y escuchar los deseos de quien lo conduce. Halley incorpora soluciones aerodinámicas refinadas manteniéndose fiel al icónico diseño de TheMob.",
    imageUrl: "http://www.icentar.me/phone/6s/images/goldbig.jpg",
    price: 199269.3,
    quantity: 1,
    subproducts: [
      {
        id: 0,
        name: "Hek",
        description: "Llanta Hek",
        imageUrl: "http://www.icentar.me/phone/6s/images/goldbig.jpg",
        price: 720,
        quantity: 4,
      },
      {
        id: 0,
        name: "Pzero Pirelli",
        description: "Neumatico Pzeo Pirelli",
        imageUrl: "http://www.icentar.me/phone/6s/images/goldbig.jpg",
        price: 110,
        quantity: 4,
      },
    ],
  },
  {
    id: 1,
    name: "Betelgeuse",
    description:
      "Betelgeuse es un superdeportivo creado con el único objetivo de ofrecer toda la emoción y la tecnología de competición de un auténtico coche de carreras en un modelo legal de carretera.Los amplios conocimientos técnicos de TheMob en el universo de los deportes de motor, sumados a su tradición ganadora, se concentran en el nuevo Betelgeuse con aerodinámica extrema, dinámica de conducción de competición, componentes ligeros y el V10 con mejor rendimiento, está preparados para liberar todas las emociones de la pista en su día a día",
    imageUrl: "http://www.icentar.me/phone/5s/images/silverbig.png",
    price: 170069.9,
    subproducts: [
      {
        id: 0,
        name: "Hek",
        description: "Llanta Hek",
        imageUrl: "http://www.icentar.me/phone/6s/images/goldbig.jpg",
        price: 720,
        quantity: 4,
      },
      {
        id: 0,
        name: "Pzero Pirelli",
        description: "Neumatico Pzeo Pirelli",
        imageUrl: "http://www.icentar.me/phone/6s/images/goldbig.jpg",
        price: 110,
        quantity: 4,
      },
    ],
  },
];

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
    sceneObject.background = null;
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
  isBackgroundButton = document.getElementById("isBackground");
  backgroundButton1 = document.getElementById("background1");
  backgroundButton2 = document.getElementById("background2");
  backgroundButton3 = document.getElementById("background3");
  isBackgroundButton = document.getElementById("isBackground");
// helpButton = document.getElementById("help");
  let tiresButtons = [tire1Button, tire2Button, tire3Button];
  let colorsButtons = [redButton, silverButton, whiteButton];
  let rimsButtons = [rim1Button, rim2Button, rim3Button];
  let backgroundButtons = [
    backgroundButton1,
    backgroundButton2,
    backgroundButton3,
  ];

 /* helpButton.addEventListener("click", () => {
    console.log(carObject);
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
      changeColor("red");
      render();
      loadRim("rim1.glb");
      loadTire("tire1.glb");
    },
    function (xhr) {
      console.log(
        "Cargando modelo: " + (xhr.loaded / xhr.total) * 100 + "% loaded"
      );
    }
  );
}
function loadRim(nombreFichero) {
  loaderObject.load(
    nombreFichero,
    function (gltf) {
      gltf.scene.name = nombreFichero;
      sceneObject.add(gltf.scene);
      rimObjects[0] = gltf.scene;
      for (let i = 1; i < 4; i++) {
        let temprim = gltf.scene.clone();
        rimObjects[i] = temprim;
      }
      for (let i = 0; i < 4; i++) {
        rimObjects[i].scale.set(0.28, 0.28, 0.28);
        if (nombreCocheFichero == "car3.glb") {
          carObject.children[i + 3].add(rimObjects[i]);
        } else carObject.children[i].add(rimObjects[i]);
      }
      render();
    },
    function (xhr) {
      console.log(
        "Cargando modelo: " + (xhr.loaded / xhr.total) * 100 + "% loaded"
      );
    }
  );
}
function loadTire(nombreFichero) {
  loaderObject.load(
    nombreFichero,
    function (gltf) {
      gltf.scene.name = nombreFichero;
      sceneObject.add(gltf.scene);
      tireObjects[0] = gltf.scene;
      for (let i = 1; i < 4; i++) {
        let temptire = gltf.scene.clone();
        tireObjects[i] = temptire;
      }
      for (let i = 0; i < 4; i++) {
        tireObjects[i].scale.set(0.28, 0.28, 0.28);
        if (nombreCocheFichero == "car3.glb") {
          carObject.children[i + 3].add(tireObjects[i]);
        } else carObject.children[i].add(tireObjects[i]);
      }
      render();
    },
    function (xhr) {
      console.log(
        "Cargando modelo: " + (xhr.loaded / xhr.total) * 100 + "% loaded"
      );
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
  for (let i = 0; i < 4; i++) {
    if (nombreCocheFichero == "car3.glb") {
      carObject.children[i + 3].remove(rimObjects[i]);
    }

    carObject.children[i].remove(rimObjects[i]);
    render();
  }
  for (let i = 0; i < 4; i++) {
    rimObjects.pop();
  }
}
function removeTire() {
  for (let i = 0; i < 4; i++) {
    if (nombreCocheFichero == "car3.glb") {
      carObject.children[i + 3].remove(tireObjects[i]);
    }
    carObject.children[i].remove(tireObjects[i]);
    render();
  }
  for (let i = 0; i < 4; i++) {
    tireObjects.pop();
  }
}
function render() {
  rendererObject.render(sceneObject, cameraObject);
}
