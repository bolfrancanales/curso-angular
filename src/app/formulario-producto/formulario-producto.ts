import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-producto',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css',
})
export class FormularioProducto {

  @Output() productoAgregado = new EventEmitter<{
    nombre: string;
    descripcion: string;
  }>();

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          this.longitudMinima(3)
        ]
      ],
      descripcion: [
        '',
        Validators.required
      ]
    });
  }

  longitudMinima(minimo: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      return control.value.length >= minimo
        ? null
        : { longitudMinima: true };
    };
  }

  agregar(): void {
    if (this.formulario.valid) {
      this.productoAgregado.emit(this.formulario.value);
      this.formulario.reset();
    }
  }
}
