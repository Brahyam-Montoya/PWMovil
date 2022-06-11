async function fetchText() {
    let response = await fetch('data/datos.json');
    let data = await response.json();
}

async function getCatalogo() {
    let url = 'data/datos.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderCatalogo() {
    let users = await getCatalogo();
    let html = '';
    users.forEach(user => {
        let htmlSegment = ` <div class="card">
        <img src="${user.img}" class="u-full-width">
        <div class="info-card">
            <h4>${user.titulo}</h2>
            <p>${user.descripcion}<p>
            <p class="precio">${user.precio}</p>
            <a href="#" class="u-full-width button-primary button input 
            ">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Agregar &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</a>
            <a href="#" class="u-full-width buttonMod-primary buttonMod input 
            "> Modificar</a>
            <a href="#" class="u-full-width buttoneL-primary buttoneL input eliminarCatalogo
            "> Eliminar</a>
         
        </div>
        
    </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.catalogo');
    container.innerHTML = html;
}

renderCatalogo();
