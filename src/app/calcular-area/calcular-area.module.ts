import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-calcular-area',
  templateUrl: './calcular-area.page.html',
  styleUrls: ['./calcular-area.page.scss'],
})
export class CalcularAreaPage {
  // Definir valores predeterminados
  base: number = 5;
  altura: number = 10;
  area: number | null = null;

  // Método para calcular el área
  calcularArea() {
    this.area = this.base * this.altura;
  }
}

