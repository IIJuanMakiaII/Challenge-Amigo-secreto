// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1. Declarar el array para almacenar los amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // trim elimina espacios al inicio y al final

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el input
    input.value = "";

    // Actualizar la lista de amigos
    mostrarAmigos();
}

// 3. Función para mostrar los amigos en la lista
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista antes de mostrar
    lista.innerHTML = "";

    // Recorrer el array y crear <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// 4. Función para sortear un amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    // Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
