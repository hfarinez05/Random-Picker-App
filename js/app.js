const listadoNombres = document.querySelector("#nombres");
const btn = document.querySelector("#btn-obtener");
const resultado = document.querySelector("#resultado");
const modal = document.querySelector(".modal");

// Función que se ejecuta al presionar el botón "Obtener Nombre"
function obtenerNombre() {
  const textareaValue = listadoNombres.value.trim();

  if (!textareaValue) {
    alert("Por favor, escribe una lista de nombres.");
    return;
  }

  modal.style.display = "block";

  setTimeout(() => {
    const nombres = textareaValue
      .split("\n")
      .map((nombre) => nombre.trim())
      .filter(Boolean);

    const nombresInvalidos = nombres.filter((linea) => linea.includes(" "));
    if (nombresInvalidos.length) {
      modal.style.display = "none";
      alert(
        "Por favor, escribe solo un nombre por línea. Verifica las siguientes líneas:\n" +
          nombresInvalidos.join("\n")
      );
      return;
    }

    if (!nombres.length) {
      alert("No hay nombres válidos en la lista.");
      modal.style.display = "none";
      return;
    }

    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    resultado.innerHTML = `<p style="animation: fadeIn 0.5s;">${nombreAleatorio}</p>`;

    modal.style.display = "none";
  }, 2000);
}

btn.addEventListener("click", obtenerNombre);

// Animación de aparición (opcional)
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
