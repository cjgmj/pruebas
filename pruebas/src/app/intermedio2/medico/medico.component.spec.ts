import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';

describe('Medico Component', () => {
    let componente: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent]
        });

        fixture = TestBed.createComponent(MedicoComponent);
        componente = fixture.componentInstance;
    });

    it('Debe de crearse el componente', () => {
        expect(componente).toBeTruthy();
    });

    it('Debe devolver el nombre del médico', () => {
        const nombre = 'Juan';
        const res = componente.saludarMedico(nombre);

        expect(res).toContain(nombre);
    });
});
