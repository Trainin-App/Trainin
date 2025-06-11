export interface Ejercicio {
  Id: number;
  Nombre: string;
  Descripcion: string;
  Video: string;
  ValorMet: number;
  Landmark: string;
  TieneCorreccion: boolean;
  Imagen: string;
  CorreccionPremium: boolean;
  IdTipoEjercicio: number;
  IdsGrupoMuscular: number[];
  IdsCategorias: number[];
}

export type EjercicioIncorporadoDTO = Ejercicio;