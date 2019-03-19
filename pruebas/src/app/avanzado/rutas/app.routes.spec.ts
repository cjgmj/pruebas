import { RUTAS } from './app.routes';
import { MedicoComponent } from 'src/app/intermedio2/medico/medico.component';

describe('rutas principales', () => {
    it('Debe exister la ruta /medico/:id', () => {
        expect(RUTAS).toContain({path: 'medico/:id', component: MedicoComponent});
    });
});
