import { mensaje } from './string';

// Al poner xdescribe se omite el bloque de pruebas
// Sirve para agrupar pruebas
describe('Pruebas de strings', () => {
    // Es una prueba
    it('Debe devolver un string', () => {
        const resp = mensaje('Juan');

        expect( typeof resp ).toBe('string');
    });

    it('Debe devolver un saludo con el nombre enviado', () => {
        const nombre = 'Juan';
        const resp = mensaje(nombre);

        expect( resp ).toContain(nombre);
    });
});
