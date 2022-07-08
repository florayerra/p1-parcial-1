class Pista {
    #nombre = 'nombre';
    #duracion = 120;

    constructor() {
        console.log('Nueva pista creada');
    }

    estrablecerNombrePista() {
        do {
            this.#nombre = prompt('Ingrese el nombre de la pista')
        } while(!isNaN(this.#nombre));
        
    }

    estrablecerTiempoPista() {
        
        do {
            do {
                this.#duracion = prompt('Ingrese la duración de la pista')
            } while (isNaN(this.#duracion));
        } while(!(this.#duracion >= 0 && this.#duracion <=  7200) );
           
    }
     
    

    obtenerDuracion() {
        return this.#duracion;
    }

    generarBloqueHtml() {
        let html = `Nombre: ${this.#nombre} - Duración: <span style="color: ${this.#duracion  > 180 ? 'red' : 'green'}">${this.#duracion} </span>`
        
        return html;
    }

    testPistaNombre(nombre, duracion) {
        this.#nombre = nombre;
        this.#duracion = duracion;
    }

    
}