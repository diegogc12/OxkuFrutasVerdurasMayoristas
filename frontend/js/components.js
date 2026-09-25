async function cargarComponente(id, archivo) {
    
    const contenedor = document.getElementById(id);

    if (!contenedor){
        console.warn(`No existe el contenedor #${id}`);
        return;
    }

    try{
        const respuesta = await fetch(archivo);

        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar ${archivo} (${respuesta.status})`);
        }

        const html = await respuesta.text();

        contenedor.innerHTML = html;
    }
    catch (error) {
        console.error(error)
    }
}

export async function cargarComponentes() {

    //Lista de componentes a Cargar

    const componentes = [
        {id: "navbar", archivo: "./components/navbar.html"},
        {id: "footer", archivo: "./components/footer.html"}
    ]
    //    await cargarComponentes("navbar", "/components/navbar.html");

    for (const componente of componentes) {
        await cargarComponente(componente.id, componente.archivo)
    }

}
