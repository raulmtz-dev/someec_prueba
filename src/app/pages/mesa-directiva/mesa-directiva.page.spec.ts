import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesaDirectivaPage } from './mesa-directiva.page';

describe('MesaDirectivaPage', () => {
  let component: MesaDirectivaPage;
  let fixture: ComponentFixture<MesaDirectivaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaDirectivaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
