//requires
const fs = require('fs');
var colors = require('colors');

const listarTabla = (base, limite = 10) => {
    console.log('--------------------------'.green);
    console.log(`----tabla de ${base}------`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un número`);
            return;
        }

        let table = '';

        for (let i = 1; i <= limite; i++) {
            table += `${base} * ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(table));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla,
};