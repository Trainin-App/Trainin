import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Ejercicio, EjercicioIncorporadoDTO } from '../../modelos/EjercicioIncorporadoDTO';
import { environment } from '../../../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class EjercicioService {
  private apiUrl = `${environment.URL_BASE}/Ejercicios/`;

  constructor(private http: HttpClient) {}

  obtenerTodosLosEjercicios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}obtenerEjercicios`);
  }
/*  obtenerEjercicioPorId(id: number): Observable<Ejercicio> {
    return this.obtenerTodosLosEjercicios().pipe(
      map((list: any[]) => list.find((e: { id: number; }) => e.id === id)!)
    );
  }*/
 
    obtenerEjercicioPorId(id: number): Observable<Ejercicio> {
  return this.http.get<Ejercicio>(`${this.apiUrl}obtenerEjercicioPorId/${id}`);
}

  crearEjercicio(dto: any): Observable<any> {
    console.log(dto);
    return this.http.post<any>(`${this.apiUrl}agregarEjercicio`, dto);
  }
  editarEjercicio(id: number, dto: EjercicioIncorporadoDTO): Observable<any> {
    return this.http.patch(`${this.apiUrl}editarEjercicio/${id}`, dto);
  }
  eliminarEjercicio(id: number): Observable<any> {
    return this.http.delete(`${environment.URL_BASE}/Ejercicios/eliminar/${id}`);
  }

  obtenerCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.URL_BASE}/categoriaejercicio/obtenerCategorias`);
  }
  obtenerGruposMusculares(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.URL_BASE}/grupoMuscular/obtenerGruposMusculares`);
  }
}
