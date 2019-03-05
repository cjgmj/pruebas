import { Jugador } from './clase';

describe('Pruebas de clase', () => {
    let jugador = null;

    // beforeAll( () => {
    //     console.log('beforeAll');
    // } );
    beforeEach( () => {
        jugador = new Jugador();
        // console.log('beforeEach');
    } );
    // afterAll( () => {
    //     console.log('afterAll');
    // } );
    // afterEach( () => {
    //     console.log('afterEach');
    // } );

    it('Debe retornar 80 de hp si recibe 20 de daño', () => {
        const resp = jugador.recibeDanio(20);

        expect( resp ).toBe(80);
    });

    it('Debe retornar 50 de hp si recibe 50 de daño', () => {
        const resp = jugador.recibeDanio(50);

        expect( resp ).toBe(50);
    });

    it('Debe retornar 0 de hp si recibe 100 de daño o más', () => {
        const resp = jugador.recibeDanio(300);

        expect( resp ).toBe(0);
    });
});
