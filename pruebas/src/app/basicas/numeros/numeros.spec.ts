import { incrementar } from './numeros';

describe('Pruebas de números', () => {
    it('Debe devolver 100, si el número introducido es mayor a 100', () => {
        const resp = incrementar(300);

        expect( resp ).toBe(100);
    });

    it('Debe devolver el número ingresado más uno si no es mayor a 100', () => {
        const resp = incrementar(50);

        expect( resp ).toBe(51);
    });
});
