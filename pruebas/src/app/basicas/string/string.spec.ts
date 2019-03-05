import { mensaje } from './string';

// Sirve para agrupar pruebas
describe('Pruebas de strings', () => {
    // Es una prueba
    it('Debe devolver un string', () => {
        const resp = mensaje('Juan');

        expect( typeof resp ).toBe('string');
    });
});
