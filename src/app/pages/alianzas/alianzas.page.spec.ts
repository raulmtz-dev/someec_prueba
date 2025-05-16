import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlianzasPage } from './alianzas.page';

describe('AlianzasPage', () => {
  let component: AlianzasPage;
  let fixture: ComponentFixture<AlianzasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlianzasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
