let container = document.getElementById("unId")
console.log(container)
const API_URL = "http://localhost:3000/Propiedades"
const URL_TIPO = "http://localhost:3000/Propiedades/?tipo="
const URL_TRANSACCION = "http://localhost:3000/Propiedades/?transaccion="
const URL_UBICACION = "http://localhost:3000/Propiedades/?ubicacion="
const fromulario = document.getElementById("form")
const tpo = document.getElementById("tipos")
const trans = document.getElementById("transaccion")
const ubi = document.getElementById("ubicacion")
const favoritos = document.querySelector("#unId")
const fav = document.getElementById("star")
let favorites = [];

const addHtml = async (url) => {
    const peticion = await fetch(url)
    let peticionJson = await peticion.json()
    console.log(peticionJson)
    try {
        container.innerHTML = ``
        peticionJson.forEach(element => {
            const { id, imagen, nombre, direccion, ubicacion, area, habitaciones, baños, tipo, transaccion, precio, parqueaderos, propietario, status, Descripcion } = element
            const div = document.createElement("div")
            div.setAttribute("class", "idTargets")
            div.innerHTML = `<div class="targets">
                                <div id="Image">
                                    <div id="cardSup">
                                        <label id="type" type="button">${tipo}</label>
                                        <label id="trans" type="button">${transaccion}</label>
                                        <div id="sup2">
                                            <label id="price" type="button">${precio}</label>
                                        </div>
                                        <img src="${imagen}" alt="">
                                    </div>
                                    <div class="dataProp">
                                        <p>${ubicacion}</p>
                                        <h1>${direccion}</h1>
                                        <p>${propietario}</p>
                                        <div id="cardInf">
                                            <p class="areaCard"><img src="./images/Area Icon.png" alt=""> ${area + "m2"}</p>
                                            <p><img src="./images/Garage Icon.png" alt=""> ${parqueaderos}</p>
                                            <p><img src="./images/Bathroom Icon.png" alt=""> ${baños}</p>
                                            <p><img src="./images/Fill 5.png" alt=""> ${habitaciones}</p>
                                            <button href="#" onclick="addFavoritos(${id})" id="star">⭐</button>
                                        </div>
                                    </div>
                                </div>
                                </div>`;
            container.appendChild(div)


        })

    } catch (error) {
        console.log(error)
    }
}

addHtml(API_URL)


fromulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const tipo = tpo.value;
    const transaccion = trans.value;
    const ubicacion = ubi.value;

    if (tipo && tipo !== "") {
        addHtml(URL_TIPO + tipo)
        tipo.value = ""
    } else if (transaccion && transaccion !== "") {
        addHtml(URL_TRANSACCION + transaccion)
        transaccion.value = ""
    } else if (ubicacion && ubicacion !== "") {
        addHtml(URL_UBICACION + ubicacion)
        ubicacion.value = ""
    } else {
        window.location.reload()
    }
})

let favorito = {}

const addFavoritos = async (_param) => {
    try {
        const res = await fetch(API_URL + '?id=' + _param)
        const data = await res.json()
        console.log(data)
        favorito = JSON.stringify(data);

        favorites.push(favorito)
        localStorage.setItem("Favoritos", favorites);
    } catch (error) {
        console.log(error)
    }
}




