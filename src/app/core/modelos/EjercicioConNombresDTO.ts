import { Ejercicio } from './EjercicioIncorporadoDTO';
export interface EjercicioConNombres extends Ejercicio {
  nombresGrupos:     string[];
  nombresCategorias: string[];
}
