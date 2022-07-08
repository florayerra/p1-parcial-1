'use strict'

class Disco {
    static cantidadDicos = 0;
    static codigos = [];
    #nombre = 'nombre';
    #autor = 'autor';
    #codigo;
    #pistas = [];

    constructor() {
        console.log('Nuevo disco creado');
        Disco.cantidadDicos++;
    }

    establecerNombre() {
        do {
            this.#nombre = prompt('Ingrese el nombre del disco')
        } while(!isNaN(this.#nombre));
    }

    establecerAutor() {
        do {
            this.#autor = prompt('Ingrese el nombre del autor')
        } while(!isNaN(this.#autor));
    }
     
    establecerCodigo() {
        let existeCodigo = false;
        do {
            existeCodigo = false;
            this.#codigo = parseInt(prompt('Ingrese el codigo del disco que sea igual o menor a 999'));
            for (let codigo of Disco.codigos){ 
            if(this.#codigo == codigo){ 
            alert('Este código ya existe');
            existeCodigo = true;
            }
            
        }
           
        } while(!(this.#codigo >= 1 && this.#codigo <= 999) || existeCodigo);
        Disco.codigos.push(this.#codigo);
        console.log(Disco.codigos);
    }

    establecerPista (pista) {
        this.#pistas.push(pista);
    }

    cantidadPistas() {
        let cantidad = this.#pistas.length;
        return cantidad;
    }

    acumularTiempoPistas() {
        let acum = 0;
        for (let pista of this.#pistas) {
            acum += pista.obtenerDuracion();
        }
        return acum;
    }

    promedioDuracion() {
        let cantidad = this.#pistas.length;
        let acum = 0;
        for (let pista of this.#pistas) {
            acum += pista.obtenerDuracion();
        }
        let promedio = acum / cantidad;
        return promedio;
    }

     


    generarBloqueHtml() {
        let html = `<p><strong>Nombre:</strong> ${this.#nombre} - <strong>Autor:</strong> ${this.#autor} - <strong>Código:</strong> ${this.#codigo}</p>`;
        html += `<p><strong>Duración del Disco:</strong> ${this.acumularTiempoPistas()}</p>`;
        html += `<p><strong>Pistas: (En total hay ${this.cantidadPistas()})</strong>`;
        html += `<ul>`;
        for (let pista of this.#pistas) {
            html += `<li>${pista.generarBloqueHtml()}</li>`;
        }
        html += `</ul>`;
        html += `<p><strong>Promedio de duración del disco:</strong> ${this.promedioDuracion().toFixed(2)} segundos</p>`;
        html += `<hr>`
        return html;
    }

    testEstablecerNombre(nombre, autor, codigo) {
        this.#nombre = nombre;
        this.#autor = autor;
        this.#codigo = codigo;
    }





}