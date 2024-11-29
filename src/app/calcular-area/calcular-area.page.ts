import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-area',
  templateUrl: './calcular-area.page.html',
  styleUrls: ['./calcular-area.page.scss'],
})
export class CalcularAreaPage {
  // Valores predeterminados
  base: number = 5; // Base del rectángulo
  altura: number = 10; // Altura del rectángulo
  area: number | null = null; // Resultado del cálculo

  // Método para calcular el área
  calcularArea() {
    this.area = this.base * this.altura;
  }
}











