import { Component, OnInit } from '@angular/core';
import { EjercicioService } from '../../core/servicios/EjercicioServicio/ejercicio.service';
import { Ejercicio, EjercicioIncorporadoDTO } from '../../core/modelos/EjercicioIncorporadoDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicios-list',
  standalone: false,
  templateUrl: './listado-de-ejercicios.component.html',
  styleUrl: './listado-de-ejercicios.component.css'
})
export class ListadoDeEjerciciosComponent implements OnInit {
  ejercicios: any[] = [];

  constructor(
    private svc: EjercicioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.load();
  }

load(): void {
  this.svc.obtenerTodosLosEjercicios()       
          .subscribe(res => (
            this.ejercicios = res), error => (console.log(error)) );          
}

crear():   void { this.router.navigate(['/crear']); }
editar(e: any):   void { this.router.navigate(['/editar',   e.id]); }
eliminar(e: any): void { 
  console.log(e);
  this.svc.eliminarEjercicio(e.id).
  subscribe({next:(response:any)=>{
    console.log(response);
  },
error:(error)=>{console.log(error)}
}); }

}