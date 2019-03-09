import { usuarioInsertado } from './booleanos';

xdescribe('Pruebas de booleanos', () => {
    it('Debe devolver false', () => {
        const resp = usuarioInsertado();

        expect( resp ).not.toBeTruthy();
    });
});
