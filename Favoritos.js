let cont = document.getElementById("unId")
console.log(cont)
function agregarFavoritos() {
    let favJson = JSON.parse(localStorage.getItem("Favoritos"))
    favJson.forEach(element => {
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
        cont.appendChild(div)

    });
}
agregarFavoritos()