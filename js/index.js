//1. Checkbox para habilitar boton de envio en formulario

function habilitarEnvio() {
  let checkbox = document.getElementById("aceptar");
  let boton = document.getElementById("enviar");

  // Verificar si el checkbox está marcado
  if (checkbox.checked) {
    boton.disabled = false; // Habilitar el botón
  } else {
    boton.disabled = true; // Deshabilitar el botón
  }
}
// ---------------------------------------------------

//2. Boton de subir
window.onscroll = function () {
  pageScroll();
};

function pageScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnVolverArriba").style.display = "block";
  } else {
    document.getElementById("btnVolverArriba").style.display = "none";
  }
}

function subirAlInicio() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ---------------------------------------------------

//3. Reloj: Hora y fecha

function startTime() {
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let seg = today.getSeconds();
  let ap = hr < 12 ? "<span>AM</span>" : "<span>PM</span>";
  hr = hr == 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;
  hr = checkTime(hr);
  min = checkTime(min);
  seg = checkTime(seg);
  document.getElementById("clock").innerHTML =
    hr + ":" + min + ":" + seg + " " + ap;

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let curYear = today.getFullYear();
  let date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
  document.getElementById("date").innerHTML = date;

  const time = setTimeout(function () {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startTime();

// ---------------------------------------------------

//4. Modo Oscuro
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  VerificarTema();
}

document.addEventListener("DOMContentLoaded", function () {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    document.body.classList.add("dark-mode");
    VerificarTema();
  }
});

window.addEventListener("beforeunload", function () {
  const darkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", darkMode);
  VerificarTema();
});

function VerificarTema() {
  const body = document.body;
  //   const sol_luna = document.querySelector(".sol-luna");
  const luna = document.querySelector(".fa-moon");
  const sol = document.querySelector(".fa-sun");

  if (body.classList.contains("dark-mode")) {
    luna.style.display = "none";
    sol.style.display = "block";
  } else {
    luna.style.display = "block";
    sol.style.display = "none";
  }
}
