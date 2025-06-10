import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TelefonoPipe } from '../../pipes/telefono.pipe';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  standalone: true,
  imports: [CommonModule, TelefonoPipe]
})
export class ClientesComponent implements OnInit {
  clientes: any[] = [];
  page: number = 1;
  size: number = 10;

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clientesService.getClientes(this.page, this.size).subscribe((data: any[]) => {
      this.clientes = data;
    });
  }

  cambiarPagina(pagina: number): void {
    if (pagina < 1) return; // Evita números negativos o página 0
    this.page = pagina;
    console.log(`Nueva página: ${this.page}`); // Debug en consola
    this.getClientes();
  }

}

