import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from } from 'rxjs/index';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe cargar los médicos', () => {
        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return from([medicos]);

        });

        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);
    });


});
