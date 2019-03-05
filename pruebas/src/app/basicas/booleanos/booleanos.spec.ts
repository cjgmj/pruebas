import { usuarioInsertado } from './booleanos';

describe('Pruebas de booleanos', () => {
    it('Debe devolver false', () => {
        const resp = usuarioInsertado();

        expect( resp ).not.toBeTruthy();
    });
});
