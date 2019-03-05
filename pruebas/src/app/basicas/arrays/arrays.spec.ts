import { obtenerRobots } from './arrays';

describe('Pruebas de arrays', () => {
    it('Debe devolver al menos tres robots', () => {
        const resp = obtenerRobots();

        expect( resp.length ).toBeGreaterThanOrEqual(3);
    });

    it('Debe devolver MegaMan y Ultron', () => {
        const resp = obtenerRobots();

        expect( resp ).toContain('MegaMan');
        expect( resp ).toContain('Ultron');
    });
});
