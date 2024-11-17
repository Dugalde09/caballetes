document.getElementById('clonar-formato').addEventListener('click', () => {
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);
    const contenedorPrincipal = document.getElementById('contenedor-principal');
    const formatoOriginal = document.querySelector('.contenedor');

    if (cantidad > 0) {
        for (let i = 0; i < cantidad; i++) {
            const clon = formatoOriginal.cloneNode(true);
            contenedorPrincipal.appendChild(clon);
        }
    }
});
