import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcularAreaPage } from './calcular-area.page';

describe('CalcularAreaPage', () => {
  let component: CalcularAreaPage;
  let fixture: ComponentFixture<CalcularAreaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
