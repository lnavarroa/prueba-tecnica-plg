import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefono'
})
export class TelefonoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Eliminar todos los caracteres que no sean números
    const numeroLimpio = value.replace(/\D/g, '');

    // Verificar si el número tiene exactamente 9 dígitos
    if (numeroLimpio.length === 9) {
      return `+569 ${numeroLimpio.substring(0, 4)} ${numeroLimpio.substring(4)}`;
    }

    // Si el número tiene 11 dígitos y empieza con +56, eliminar el prefijo
    if (numeroLimpio.length === 11 && numeroLimpio.startsWith('56')) {
      return `+569 ${numeroLimpio.substring(2, 6)} ${numeroLimpio.substring(6)}`;
    }

    // Si el número no cumple con ninguna condición, devolverlo sin cambios
    return value;
  }
}
