const inputBusqueda = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const listaSugerencias = document.getElementById('sugerencias');

// 1. Asegurar que los temas se muestren al cargar la página
window.onload = () => {
    renderizar(bibliotecaBiblica);
};

// 2. Lógica del buscador
inputBusqueda.addEventListener('input', () => {
    const valor = inputBusqueda.value.toLowerCase();
    clearBtn.classList.toggle('hidden', valor.length === 0);
    
    if (valor.length > 0) {
        // Filtrar y mostrar sugerencias y resultados
        const resultados = bibliotecaBiblica.filter(t => 
            t.nombre.toLowerCase().includes(valor)
        );
        mostrarSugerencias(resultados);
        renderizar(resultados, true); // Muestra solo lo que coincide
    } else {
        // Si el buscador está vacío, muestra todo
        listaSugerencias.innerHTML = '';
        renderizar(bibliotecaBiblica);
    }
});

// 3. Botón X para limpiar
clearBtn.addEventListener('click', () => {
    inputBusqueda.value = '';
    clearBtn.classList.add('hidden');
    listaSugerencias.innerHTML = '';
    renderizar(bibliotecaBiblica);
});

// 4. Mostrar sugerencias en la lista flotante
function mostrarSugerencias(resultados) {
    listaSugerencias.innerHTML = '';
    resultados.forEach(tema => {
        const li = document.createElement('li');
        li.textContent = tema.nombre;
        li.onclick = () => {
            inputBusqueda.value = tema.nombre;
            listaSugerencias.innerHTML = '';
            renderizar([tema], true);
        };
        listaSugerencias.appendChild(li);
    });
}

// 5. Función original de renderizado
function renderizar(datos, abrirTodo = false) {
    const areaContenido = document.getElementById('contentArea');
    areaContenido.innerHTML = '';
    datos.forEach(tema => {
        const dTema = document.createElement('details');
        if (abrirTodo) dTema.setAttribute('open', '');
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
        areaContenido.appendChild(dTema);
    });
}