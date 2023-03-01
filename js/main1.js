
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
let agregarContainer = document.getElementById("listado");
let btnAdd = document.getElementById("centericon23");
let btnCancelar = document.getElementById("cancelam");
let btnConfirmar = document.getElementById("agregam");
let color = document.querySelector('input[name="colorsito"]:checked');
let tareas = document.getElementById("tasks");
let tareasPendientes = document.getElementById("tareasPendientes");
let btnBorrar = document.getElementById("btnBorrar");

//Inputs
let tareaInput = document.getElementById("nomtarea");
let select = document.getElementById("lang");
let descripcionTxt = document.getElementById("Descriptarea2");

let cantidadDeTareas = 0;

btnAdd.addEventListener("click", () => {
  if (cantidadDeTareas <= 0) {
    listavacia.classList.toggle("hidden");
    agregarContainer.classList.toggle("active");
    btnAdd.classList.toggle("active");
  }

  if (cantidadDeTareas >= 1) {
    listavacia.classList.add("hidden");
    agregarContainer.classList.toggle("active");
    tareas.style.display = "none";
    btnAdd.classList.toggle("active");
  }
});

btnCancelar.addEventListener("click", () => {
  if (cantidadDeTareas <= 0) {
    listavacia.classList.toggle("hidden");
    agregarContainer.classList.toggle("active");
    btnAdd.classList.toggle("active");
  }

  if (cantidadDeTareas >= 1) {
    agregarContainer.classList.add("hidden");
    agregarContainer.classList.remove("active");
    tareas.style.display = "flex";
    btnAdd.classList.toggle("active");
  }
});

let nombreTarea = nomtarea.value;

const enviarDatos = () => {
  let nombreTarea = nomtarea.value;
  let descripcion = Descriptarea2.value;
  let tipoDeTarea = lang.value;
  let color = document.querySelector('input[name="colorsito"]:checked')
  .classList[1];
  console.log(nombreTarea, tipoDeTarea, descripcion, color);
};

btnConfirmar.addEventListener("click", () => {
    let nombreTarea = nomtarea.value;
  let descripcion = Descriptarea2.value;
  let tipoDeTarea = lang.value;
  let color = document.querySelector('input[name="colorsito"]:checked')
  .classList[1];
  console.log(nombreTarea, tipoDeTarea, descripcion, color);

  if (tipoDeTarea == "trabajo") {
    imgTipo = "/images/tipo/briefcase.svg";
  }
  if (tipoDeTarea == "personal") {
    imgTipo = "/images/tipo/personal.svg";
  }
  if (tipoDeTarea == "domestica") {
    imgTipo = "/images/tipo/casa.svg";
  }
  if (tipoDeTarea == "Entretenimiento") {
    imgTipo = "/images/tipo/gamepad.svg";
  }

  if (tipoDeTarea == "monetaria") {
    imgTipo = "/images/tipo/usd-circle.svg";
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
  agregarContainer.classList.add("hidden");
  agregarContainer.classList.remove("active");
  tareas.style.display = "flex";
  btnAdd.classList.toggle("active");

  tareaPendiente = `<div id="tareasPendientes" class="tareaspendientes">
  <div class="colortarea ${colorFondo}">
    <img src=" ${imgTipo}" alt=""  width="20" />
  </div>
  <div class="data">
    <p id="nombretarea"><strong>${nombreTarea}</strong></p>
    <p id="descripciontarea">${descripcion}</p>
  </div>
  <div class="botonestarea">
    <input type="checkbox" name="" id="completada" />
    <button id="btnBorrar" class="borrada">
      <img class="remover" src="/images/icons8-borrar-para-siempre.gif"  alt="" />
    </button>
  </div>
</div>`;

  tareas.innerHTML += tareaPendiente;

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


