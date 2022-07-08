 

// Discos:
let ListadoDiscos = [];


// Función Cargar:
const Cargar = () => {
   
    let disco = new Disco();
    disco.establecerNombre();
    disco.establecerAutor();
    disco.establecerCodigo();

    do {
        let pista = new Pista();
        pista.estrablecerNombrePista();
        pista.estrablecerTiempoPista();
        disco.establecerPista(pista);

    } while (confirm('Desea ingresar otra pista?'));

    ListadoDiscos.push(disco);
};

// Función Mostrar:
const Mostrar = () => {
  
    let html = '';

  
    for (let disco of ListadoDiscos) {
        html += disco.generarBloqueHtml();
    }

    html += `<p><strong>Cantidad de Discos:</strong> ${Disco.cantidadDicos}</p>`;
    
    
  
    document.getElementById('info').innerHTML = html;  
};

 





















