import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefonoPipe } from '../pipes/telefono.pipe'; // ✅ Importa el Pipe

@NgModule({
  declarations: [TelefonoPipe], // ✅ Declara el Pipe aquí
  exports: [TelefonoPipe], // ✅ Permite que otros módulos usen el Pipe
  imports: [CommonModule]
})
export class SharedModule {}
