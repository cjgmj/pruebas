import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs/index';


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

    it('Debe llamar al servidor para agregar un médico', () => {
        const espia = spyOn(servicio, 'agregarMedico').and.callFake((resp: any) => {
            return empty();
        });

        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();
    });

    it('Debe agregar un nuevo médico al array de médicos', () => {
        const medico = {id: 1, nombre: 'Juan'};

        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

        componente.agregarMedico();

        expect(componente.medicos.length).toBe(1);
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la inserción la propiedad mensajeError debe ser igual al error del servicio', () => {
        const error = 'No se pudo añadir el médico';

        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(error));

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(error);
    });

    it('Debe llamar al servidor para borrar un médico', () => {
        spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());

        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');
    });

    it('NO debe llamar al servidor para borrar un médico', () => {
        spyOn(window, 'confirm').and.returnValue(false);

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());

        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');
    });
});
