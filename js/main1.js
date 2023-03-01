
/*let btn = document.getElementById('centericon23')
let list = document.getElementById('listado')
let list2 = document.getElementById('listavacia')
let list3 = document.getElementById('listavacia2')

btn.addEventListener('click', function () {
        list.classList.toggle('active')

    })

    btn.addEventListener('click', function () {
        list2.classList.toggle('active')
    })

    btn.addEventListener('click', function () {
        list3.classList.toggle('active')
    })
    */
    
let listavacia = document.getElementById("listavacia");
let addcontainer = document.getElementById("listado");
let agregarboton = document.getElementById("centericon23");
let cbutton = document.getElementById("cancelam");
let cfbutton = document.getElementById("agregam");
let color = document.querySelector('input[name="colorsito"]:checked');
let task = document.getElementById("tasks");
let taskP = document.getElementById("taskP");
let btnBorrar = document.getElementById("btnBorrar");

//Inputs
let tareaInput = document.getElementById("nomtarea");
let select = document.getElementById("lang");
let descripcionTxt = document.getElementById("Descriptarea2");

let cantidadDeTareas = 0;

agregarboton.addEventListener("click", () => {
  if (cantidadDeTareas <= 0) {
    listavacia.classList.toggle("hidden");
    addcontainer.classList.toggle("active");
    agregarboton.classList.toggle("active");
  }

  if (cantidadDeTareas >= 1) {
    listavacia.classList.add("hidden");
    addcontainer.classList.toggle("active");
    task.style.display = "none";
    agregarboton.classList.toggle("active");
  }
});

cbutton.addEventListener("click", () => {
  if (cantidadDeTareas <= 0) {
    listavacia.classList.toggle("hidden");
    addcontainer.classList.toggle("active");
    agregarboton.classList.toggle("active");
  }

  if (cantidadDeTareas >= 1) {
    addcontainer.classList.add("hidden");
    addcontainer.classList.remove("active");
    task.style.display = "flex";
    agregarboton.classList.toggle("active");
  }
});

let nombreTarea = nomtarea.value;

const enviarDatos = () => {
  let nombreTarea = nomtarea.value;
  let descripcion = Descriptarea2.value;
  let tipoDeTarea = lang.value;
  let color = document.querySelector('input[name="colors"]:checked')
  .classList[1];
  console.log(nombreTarea, tipoDeTarea, descripcion, color);
};

cfbutton.addEventListener("click", () => {
    let nombreTarea = nomtarea.value;
  let descripcion = Descriptarea2.value;
  let tipoDeTarea = lang.value;
  let color = document.querySelector('input[name="colors"]:checked')
  .classList[1];
  console.log(nombreTarea, tipoDeTarea, descripcion, color);

  if (tipoDeTarea == "trabajo") {
    imgtype = "/images/tipo/briefcase.svg";
  }
  if (tipoDeTarea == "personal") {
    imgtype = "/images/tipo/personal.svg";
  }
  if (tipoDeTarea == "domestica") {
    imgtype = "/images/tipo/casa.svg";
  }
  if (tipoDeTarea == "Entretenimiento") {
    imgtype = "/images/tipo/gamepad.svg";
  }

  if (tipoDeTarea == "monetaria") {
    imgtype = "/images/tipo/usd-circle.svg";
  }

  if (color == "purpura") {
    colorFondo = "purpura";
  }
  if (color == "rojo") {
    colorFondo = "rojo";
  }
  if (color == "verde") {
    colorFondo = "verde";
  }
  if (color == "amarillo") {
    colorFondo = "amarillo";
  }

  cantidadDeTareas++;
  addcontainer.classList.add("hidden");
  addcontainer.classList.remove("active");
  task.style.display = "flex";
  agregarboton.classList.toggle("active");

  tareaPendiente = `<div id="taskP" class="taskp">
  <div class="colortarea ${colorFondo}">
    <img src=" ${imgtype}" alt=""  width="20" />
  </div>
  <div class="data">
    <p id="nombretarea"><strong>${nombreTarea}</strong></p>
    <p id="descripciontarea">${descripcion}</p>
  </div>
  <div class="botonestarea">
    <input type="checkbox" name="" id="completada" />
    <button id="btnBorrar" class="borrada">
      <img class="remover" src="/images/garbage-removebg-preview.png"  alt="" />
    </button>
  </div>
</div>`;

  task.innerHTML += tareaPendiente;

  nomtarea.value = "";
  Descriptarea2.value = "";
  lang.value = "";
});

document.addEventListener("click", (e) => {
  if (e.target.classList == "remover") {
    const tarea = e.target.parentNode.parentNode.parentNode;
    tarea.remove();
  }
});


