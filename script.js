// Diccionario de abreviaturas
const abreviaturas = {
    "mt": "Mateo", "mr": "Marcos", "lc": "Lucas", "jn": "Juan", "hch": "Hechos",
    "ro": "Romanos", "1co": "1 Corintios", "2co": "2 Corintios", "ga": "Gálatas",
    "ef": "Efesios", "fil": "Filipenses", "col": "Colosenses", "1ts": "1 Tesalonicenses",
    "2ts": "2 Tesalonicenses", "1ti": "1 Timoteo", "2ti": "2 Timoteo", "tit": "Tito",
    "flm": "Filemón", "he": "Hebreos", "stg": "Santiago", "1pe": "1 Pedro",
    "2pe": "2 Pedro", "1jn": "1 Juan", "2jn": "2 Juan", "3jn": "3 Juan",
    "jud": "Judas", "ap": "Apocalipsis"
};

const inputBusqueda = document.getElementById('searchInput');
const areaContenido = document.getElementById('contentArea');

// Función para renderizar la biblioteca
function renderizar(datos) {
    areaContenido.innerHTML = '';
    datos.forEach(cat => {
        const dCat = document.createElement('details');
        dCat.innerHTML = `<summary>${cat.categoria}</summary>`;
        
        cat.temas.forEach(tema => {
            const dTema = document.createElement('details');
            dTema.className = 'tema';
            dTema.innerHTML = `<summary>${tema.nombre}</summary>`;
            
            tema.versiculos.forEach(v => {
                dTema.innerHTML += `
                    <details>
                        <summary>${v.ref}</summary>
                        <div class="versiculo-texto">${v.texto}</div>
                    </details>
                `;
            });
            dCat.appendChild(dTema);
        });
        areaContenido.appendChild(dCat);
    });
}

// Búsqueda
inputBusqueda.addEventListener('input', (e) => {
    const valor = e.target.value.toLowerCase();
    if (!valor) return renderizar(bibliotecaBiblica);

    const resultados = bibliotecaBiblica.map(cat => ({
        ...cat,
        temas: cat.temas.filter(t => 
            t.nombre.toLowerCase().includes(valor) || 
            t.versiculos.some(v => v.ref.toLowerCase().includes(valor))
        )
    })).filter(cat => cat.temas.length > 0);
    
    renderizar(resultados);
});

// Inicializar
renderizar(bibliotecaBiblica);