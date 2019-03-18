import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('IncremendatorComponent', () => {

    let componente: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        componente = fixture.componentInstance;
    });

    it('Debe mostrar la leyenda', () => {
        const mensaje = 'Progreso de carga';
        componente.leyenda = mensaje;

        fixture.detectChanges(); // disparar la detección de cambios

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect(elem.innerHTML).toContain(mensaje);
    });

    it('Debe mostar en el input el valor del progreso', () => {
        componente.cambiarValor(5);

        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const elem = fixture.debugElement.query( By.css('input') ).nativeElement;

            expect( elem.value ).toBe('55');
        });

    });

});
