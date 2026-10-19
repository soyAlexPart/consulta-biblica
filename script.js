const abreviaturas = {

    // Antiguo Testamento

    "gn": "Génesis",
    "gen": "Génesis",
    "gén": "Génesis",
    "génesis": "Génesis",

    "ex": "Éxodo",
    "exo": "Éxodo",
    "éxodo": "Éxodo",

    "lv": "Levítico",
    "lev": "Levítico",
    "levítico": "Levítico",

    "nm": "Números",
    "num": "Números",
    "números": "Números",

    "dt": "Deuteronomio",
    "deut": "Deuteronomio",
    "deuteronomio": "Deuteronomio",

    "jos": "Josué",
    "josh": "Josué",
    "josué": "Josué",

    "jue": "Jueces",
    "jueces": "Jueces",

    "rut": "Rut",

    "1 s": "1 Samuel",
    "1s": "1 Samuel",
    "1 sam": "1 Samuel",
    "1sam": "1 Samuel",
    "1 samuel": "1 Samuel",

    "2 s": "2 Samuel",
    "2s": "2 Samuel",
    "2 sam": "2 Samuel",
    "2sam": "2 Samuel",
    "2 samuel": "2 Samuel",

    "1 re": "1 Reyes",
    "1r": "1 Reyes",
    "1 rey": "1 Reyes",
    "1reyes": "1 Reyes",

    "2 re": "2 Reyes",
    "2r": "2 Reyes",
    "2 rey": "2 Reyes",
    "2reyes": "2 Reyes",

    "1 cr": "1 Crónicas",
    "1cro": "1 Crónicas",
    "1cron": "1 Crónicas",
    "1 crónicas": "1 Crónicas",

    "2 cr": "2 Crónicas",
    "2cro": "2 Crónicas",
    "2cron": "2 Crónicas",
    "2 crónicas": "2 Crónicas",

    "esd": "Esdras",
    "esdras": "Esdras",

    "neh": "Nehemías",
    "nehemías": "Nehemías",

    "est": "Ester",
    "ester": "Ester",

    "job": "Job",

    "sal": "Salmos",
    "salmos": "Salmos",
    "salm": "Salmos",

    "pr": "Proverbios",
    "prov": "Proverbios",
    "proverbios": "Proverbios",

    "ec": "Eclesiastés",
    "ecl": "Eclesiastés",
    "eclesiastés": "Eclesiastés",

    "cnt": "Cantares",
    "cant": "Cantares",
    "cantares": "Cantares",

    "is": "Isaías",
    "isa": "Isaías",
    "isaías": "Isaías",

    "jer": "Jeremías",
    "jeremías": "Jeremías",

    "lam": "Lamentaciones",
    "lamentaciones": "Lamentaciones",

    "ez": "Ezequiel",
    "ezq": "Ezequiel",
    "ezequiel": "Ezequiel",

    "dn": "Daniel",
    "dan": "Daniel",
    "daniel": "Daniel",

    "os": "Oseas",
    "oseas": "Oseas",

    "joel": "Joel",

    "am": "Amós",
    "amos": "Amós",

    "abd": "Abdías",
    "abdías": "Abdías",

    "jon": "Jonás",
    "jonas": "Jonás",

    "mi": "Miqueas",
    "miqueas": "Miqueas",

    "nah": "Nahúm",
    "nahum": "Nahúm",

    "hab": "Habacuc",
    "habacuc": "Habacuc",

    "sof": "Sofonías",
    "sofonías": "Sofonías",

    "hag": "Hageo",
    "hageo": "Hageo",

    "zac": "Zacarías",
    "zacarías": "Zacarías",

    "mal": "Malaquías",
    "malaquías": "Malaquías",


    // Nuevo Testamento

    "mt": "Mateo",
    "mateo": "Mateo",

    "mr": "Marcos",
    "mc": "Marcos",
    "marcos": "Marcos",

    "lc": "Lucas",
    "luc": "Lucas",
    "lucas": "Lucas",

    "jn": "Juan",
    "juan": "Juan",

    "hch": "Hechos",
    "hech": "Hechos",
    "hechos": "Hechos",

    "ro": "Romanos",
    "rom": "Romanos",
    "romanos": "Romanos",

    "1 co": "1 Corintios",
    "1co": "1 Corintios",
    "1 cor": "1 Corintios",
    "1cor": "1 Corintios",

    "2 co": "2 Corintios",
    "2co": "2 Corintios",
    "2 cor": "2 Corintios",
    "2cor": "2 Corintios",

    "ga": "Gálatas",
    "gal": "Gálatas",
    "gálatas": "Gálatas",

    "ef": "Efesios",
    "efe": "Efesios",
    "efesios": "Efesios",

    "fil": "Filipenses",
    "flp": "Filipenses",
    "filipenses": "Filipenses",

    "col": "Colosenses",
    "colosenses": "Colosenses",

    "1 ts": "1 Tesalonicenses",
    "1ts": "1 Tesalonicenses",

    "2 ts": "2 Tesalonicenses",
    "2ts": "2 Tesalonicenses",

    "1 ti": "1 Timoteo",
    "1tim": "1 Timoteo",

    "2 ti": "2 Timoteo",
    "2tim": "2 Timoteo",

    "tit": "Tito",
    "tito": "Tito",

    "flm": "Filemón",
    "filemon": "Filemón",

    "he": "Hebreos",
    "heb": "Hebreos",
    "hebreos": "Hebreos",

    "stg": "Santiago",
    "sant": "Santiago",
    "santiago": "Santiago",

    "1 p": "1 Pedro",
    "1pe": "1 Pedro",
    "1ped": "1 Pedro",

    "2 p": "2 Pedro",
    "2pe": "2 Pedro",
    "2ped": "2 Pedro",

    "1 jn": "1 Juan",
    "1jn": "1 Juan",
    "1juan": "1 Juan",

    "2 jn": "2 Juan",
    "2jn": "2 Juan",
    "2juan": "2 Juan",

    "3 jn": "3 Juan",
    "3jn": "3 Juan",
    "3juan": "3 Juan",

    "jud": "Judas",
    "judas": "Judas",

    "ap": "Apocalipsis",
    "apoc": "Apocalipsis",
    "apocalipsis": "Apocalipsis"
};

function normalizarReferencia(texto) {

    texto = texto
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");

    for (let abreviatura in abreviaturas) {

        if (texto.startsWith(abreviatura)) {

            texto = texto.replace(
                abreviatura,
                abreviaturas[abreviatura].toLowerCase()
            );

            break;
        }
    }

    return texto;
}


const inputBusqueda = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const listaSugerencias = document.getElementById('sugerencias');

// 1. Asegurar que los temas se muestren al cargar la página
window.onload = () => {
    renderizar(bibliotecaBiblica);
};

// 2. Lógica del buscador
inputBusqueda.addEventListener('input', () => {
    const busqueda = normalizarReferencia(inputBusqueda.value);
    const valor = busqueda.toLowerCase().trim();
    clearBtn.classList.toggle('hidden', valor.length === 0);

    if (valor.length > 0) {
        // Filtrar y mostrar sugerencias y resultados
        const resultados = bibliotecaBiblica.filter(tema =>

    tema.nombre.toLowerCase().includes(valor) ||

    tema.versiculos.some(v =>
        v.ref.toLowerCase().includes(valor)
    )

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

    const claseRojo = v.rojo ? 'letra-roja' : '';

    if (v.tipo === "titulo") {

        dTema.innerHTML += `
            <div class="subtitulo">
                ${v.ref}
            </div>
        `;

    } else {

        dTema.innerHTML += `
            <details>
                <summary>${v.ref}</summary>
                <div class="versiculo-texto ${claseRojo}">
                    ${v.texto}
                </div>
            </details>
        `;

    }

});
        
        areaContenido.appendChild(dTema);

    });


    
    const titulo = document.createElement("h2");
    titulo.className = "titulo-seccion";
    titulo.textContent = "Tema Sabado (1 de Agosto del 2026)";
    areaContenido.appendChild(titulo);

    const nuevoTema = document.createElement("details");
    nuevoTema.innerHTML = `
    <summary>Transfiguración</summary>

    <details>
        <summary>Mateo 17:1-13</summary>
        <div class="versiculo-texto">
            <div class="titulo-seccion">La transfiguración</div>
            1. Seis días después, Jesús tomó a Pedro, a Jacobo y a Juan su hermano, y los llevó aparte a un monte alto;\n
            2. y se transfiguró delante de ellos, y resplandeció su rostro como el sol, y sus vestidos se hicieron blancos como la luz.\n
            3. Y he aquí les aparecieron Moisés y Elías, hablando con él.\n
            4. Entonces Pedro dijo a Jesús: Señor, bueno es para nosotros que estemos aquí; si quieres, hagamos aquí tres enramadas: una para ti, otra para Moisés, y otra para Elías.\n
            5. Mientras él aún hablaba, una nube de luz los cubrió; y he aquí una voz desde la nube, que decía: Este es mi Hijo amado, en quien tengo complacencia; a él oíd.\n
            6. Al oír esto los discípulos, se postraron sobre sus rostros, y tuvieron gran temor.\n
            7. Entonces Jesús se acercó y los tocó, y dijo: 
                <div class="letra-roja">Levantaos, y no temáis.</div>
            8. Y alzando ellos los ojos, a nadie vieron sino a Jesús solo.\n
            9. Cuando descendieron del monte, Jesús les mandó, diciendo: 
                <div class="letra-roja">No digáis a nadie la visión, hasta que el Hijo del Hombre resucite de los muertos.</div>
            10. Entonces sus discípulos le preguntaron, diciendo: ¿Por qué, pues, dicen los escribas que es necesario que Elías venga primero?\n
            11. Respondiendo Jesús, les dijo: 
                <div class="letra-roja">A la verdad, Elías viene primero, y restaurará todas las cosas.\n
            12. Mas os digo que Elías ya vino, y no le conocieron, sino que hicieron con él todo lo que quisieron; así también el Hijo del Hombre padecerá de ellos.</div>
            13. Entonces los discípulos comprendieron que les había hablado de Juan el Bautista.\n
        </div>
    </details>

    <details>
        <summary>Lucas 9:28-36</summary>
        <div class="versiculo-texto">
            <div class="titulo-seccion">La transfiguración</div>
            28. Aconteció como ocho días después de estas palabras, que tomó a Pedro, a Juan y a Jacobo, y subió al monte a orar.\n
            29. Y entre tanto que oraba, la apariencia de su rostro se hizo otra, y su vestido blanco y resplandeciente.\n
            30. Y he aquí dos varones que hablaban con él, los cuales eran Moisés y Elías;\n
            31. quienes aparecieron rodeados de gloria, y hablaban de su partida, que iba Jesús a cumplir en Jerusalén.\n
            32. Y Pedro y los que estaban con él estaban rendidos de sueño; mas permaneciendo despiertos, vieron la gloria de Jesús, y a los dos varones que estaban con él.\n
            33. Y sucedió que apartándose ellos de él, Pedro dijo a Jesús: Maestro, bueno es para nosotros que estemos aquí; y hagamos tres enramadas, una para ti, una para Moisés, y una para Elías; no sabiendo lo que decía.\n
            34. Mientras él decía esto, vino una nube que los cubrió; y tuvieron temor al entrar en la nube.\n
            35. Y vino una voz desde la nube, que decía: Este es mi Hijo amado; a él oíd.\n
            36. Y cuando cesó la voz, Jesús fue hallado solo; y ellos callaron, y por aquellos días no dijeron nada a nadie de lo que habían visto.
        </div>
    </details>

    <details>
        <summary>Marcos 9:2-10</summary>
        <div class="versiculo-texto">
            <div class="titulo-seccion">La transfiguración</div>
            2. Seis días después, Jesús tomó a Pedro, a Jacobo y a Juan, y los llevó aparte solos a un monte alto; y se transfiguró delante de ellos.\n
            3. Y sus vestidos se volvieron resplandecientes, muy blancos, como la nieve, tanto que ningún lavador en la tierra los puede hacer tan blancos.\n
            4. Y les apareció Elías con Moisés, que hablaban con Jesús.\n
            5. Entonces Pedro dijo a Jesús: Maestro, bueno es para nosotros que estemos aquí; y hagamos tres enramadas, una para ti, otra para Moisés, y otra para Elías.\n
            6. Porque no sabía lo que hablaba, pues estaban espantados.\n
            7. Entonces vino una nube que les hizo sombra, y desde la nube una voz que decía: Este es mi Hijo amado; a él oíd.\n
            8. Y luego, cuando miraron, no vieron más a nadie consigo, sino a Jesús solo.\n
            9. Y descendiendo ellos del monte, les mandó que a nadie dijesen lo que habían visto, sino cuando el Hijo del Hombre hubiese resucitado de los muertos.\n
            10. Y guardaron la palabra entre sí, discutiendo qué sería aquello de resucitar de los muertos.
        </div>
    </details>

    <details>
        <summary>1 Corintios 15:33-58</summary>
        <div class="versiculo-texto">
            33. No erréis; las malas conversaciones corrompen las buenas costumbres.\n
            34. Velad debidamente, y no pequéis; porque algunos no conocen a Dios; para vergüenza vuestra lo digo.\n
            35. Pero dirá alguno: ¿Cómo resucitarán los muertos? ¿Con qué cuerpo vendrán?\n
            36. Necio, lo que tú siembras no se vivifica, si no muere antes.\n
            37. Y lo que siembras no es el cuerpo que ha de salir, sino el grano desnudo, ya sea de trigo o de otro grano;\n
            38. pero Dios le da el cuerpo como él quiso, y a cada semilla su propio cuerpo.\n
            39. No toda carne es la misma carne, sino que una carne es la de los hombres, otra carne la de las bestias, otra la de los peces, y otra la de las aves.\n
            40. Y hay cuerpos celestiales, y cuerpos terrenales; pero una es la gloria de los celestiales, y otra la de los terrenales.\n
            41. Una es la gloria del sol, otra la gloria de la luna, y otra la gloria de las estrellas, pues una estrella es diferente de otra en gloria.\n
            42. Así también es la resurrección de los muertos. Se siembra en corrupción, resucitará en incorrupción.\n
            43. Se siembra en deshonra, resucitará en gloria; se siembra en debilidad, resucitará en poder.\n
            44. Se siembra cuerpo animal, resucitará cuerpo espiritual. Hay cuerpo animal, y hay cuerpo espiritual.\n
            45. Así también está escrito: Fue hecho el primer hombre Adán alma viviente; el postrer Adán, espíritu vivificante.\n
            46. Mas lo espiritual no es primero, sino lo animal; luego lo espiritual.\n
            47. El primer hombre es de la tierra, terrenal; el segundo hombre, que es el Señor, es del cielo.\n
            48. Cual el terrenal, tales también los terrenales; y cual el celestial, tales también los celestiales.\n
            49. Y así como hemos traído la imagen del terrenal, traeremos también la imagen del celestial.\n
            50. Pero esto digo, hermanos: que la carne y la sangre no pueden heredar el reino de Dios, ni la corrupción hereda la incorrupción.\n
            51. He aquí, os digo un misterio: No todos dormiremos; pero todos seremos transformados,\n
            52. en un momento, en un abrir y cerrar de ojos, a la final trompeta; porque se tocará la trompeta, y los muertos serán resucitados incorruptibles, y nosotros seremos transformados.\n
            53. Porque es necesario que esto corruptible se vista de incorrupción, y esto mortal se vista de inmortalidad.\n
            54. Y cuando esto corruptible se haya vestido de incorrupción, y esto mortal se haya vestido de inmortalidad, entonces se cumplirá la palabra que está escrita: Sorbida es la muerte en victoria.\n
            55. ¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria?\n
            56. ya que el aguijón de la muerte es el pecado, y el poder del pecado, la ley.\n
            57. Mas gracias sean dadas a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo.\n
            58. Así que, hermanos míos amados, estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano.\n


            `;
        
            areaContenido.appendChild(nuevoTema);
            console.log(nuevoTema.innerHTML);
}

// ==============================
// BOTÓN IR ARRIBA
// ==============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
    ) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

//=========================
// MODO OSCURO
//=========================

const themeBtn = document.getElementById("themeToggle");

// Cargar preferencia
if(localStorage.getItem("modo") === "oscuro"){

    document.body.classList.add("dark");

    themeBtn.textContent="☀️";

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("modo","oscuro");

        themeBtn.textContent="☀️";

    }else{

        localStorage.setItem("modo","claro");

        themeBtn.textContent="🌙";

    }

});

// Código para expandir y contraer todos los detalles

document.getElementById("expandirTodo").addEventListener("click", () => {

    document.querySelectorAll("#contentArea details").forEach(detalle => {
        detalle.open = true;
    });

});

document.getElementById("contraerTodo").addEventListener("click", () => {

    document.querySelectorAll("#contentArea details").forEach(detalle => {
        detalle.open = false;
    });

});

// Código para aumentar y disminuir el tamaño de la letras

let tamañoLetra = 18;

const contenido = document.body;

document.getElementById("aumentarLetra").addEventListener("click", () => {

    tamañoLetra += 2;
    contenido.style.fontSize = tamañoLetra + "px";

});


document.getElementById("disminuirLetra").addEventListener("click", () => {

    if (tamañoLetra > 10) {
        tamañoLetra -= 2;
        contenido.style.fontSize = tamañoLetra + "px";
    }

});

document.getElementById("restaurarLetra").addEventListener("click", () => {

    tamañoLetra = 18;
    document.body.style.fontSize = tamañoLetra + "px";

});