import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { EjercicioService } from '../../core/servicios/EjercicioServicio/ejercicio.service';
import { IdNombre } from '../../core/modelos/NombreIdDTO';
import { EjercicioIncorporadoDTO } from '../../core/modelos/EjercicioIncorporadoDTO';

@Component({
  selector: 'app-form-admin',
  standalone: false,
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit {
  form: FormGroup;
  categorias: any[] = [];
  grupos:      any[] = [];
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private svc: EjercicioService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.form = this.fb.group({
      Id: [0],
      Nombre: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Video: [''],
      ValorMet: [0, Validators.required],
      Landmark: [''],
      TieneCorreccion: [false],
      Imagen: [''],
      CorreccionPremium: [false],
      IdTipoEjercicio: [0, Validators.required],
      IdsGrupoMuscular: this.fb.array<number>([], Validators.required),
      IdsCategorias:    this.fb.array<number>([], Validators.required)
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0;
    this.isEdit = id > 0;

        forkJoin({
      cats: this.svc.obtenerCategorias(),
      grps: this.svc.obtenerGruposMusculares()
    }).subscribe(({ cats, grps }) => {
      console.log(cats);
      this.categorias = cats;
      this.grupos     = grps;

      if (this.isEdit) {
        this.loadEjercicio(id);
      }
    });
  }

  get idsGrupoMuscular(): FormArray {
    return this.form.get('IdsGrupoMuscular') as FormArray;
  }

  get idsCategorias(): FormArray {
    return this.form.get('IdsCategorias') as FormArray;
  }

  private loadEjercicio(Id: number): void {
    this.svc.obtenerEjercicioPorId(Id).subscribe(e => {
      this.form.patchValue(e);

     e.IdsGrupoMuscular.forEach(i => this.idsGrupoMuscular.push(this.fb.control(i)));
      e.IdsCategorias.forEach(i      => this.idsCategorias.push(this.fb.control(i)));
    });
  }

  onCheckboxChange(array: FormArray, checked: boolean, value: number): void {
    if (checked) {
      array.push(this.fb.control(value));
    } else {
      const idx = array.controls.findIndex(ctrl => ctrl.value === value);
      if (idx >= 0) {
        array.removeAt(idx);
      }
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    var Ejercicio : EjercicioIncorporadoDTO = {
      Nombre: this.form.get("Nombre")?.value,
      Descripcion: this.form.get("Descripcion")?.value,
      Video: this.form.get("Video")?.value,
      ValorMet: this.form.get("ValorMet")?.value,
      Landmark: this.form.get("Landmark")?.value,
      TieneCorreccion: this.form.get("TieneCorreccion")?.value == "1" ? true : false,
      Imagen: this.form.get("Imagen")?.value,
      CorreccionPremium: this.form.get("CorreccionPremium")?.value == "1" ? true : false,
      IdTipoEjercicio: Number(this.form.get('IdTipoEjercicio')?.value),
      IdsGrupoMuscular: this.form.get("IdsGrupoMuscular")?.value,
      IdsCategorias: this.form.get("IdsCategorias")?.value,
      Id: 0
    };
    this.form.get("IdTipoEjercicio");
        this.form.get("TieneCorreccion")
            this.form.get("TieneCorreccionPremium");

    console.log(JSON.stringify(this.form.value));
    const dto = this.form.value as any;
    const request$ = this.isEdit
      ? this.svc.editarEjercicio(dto.Id, dto)
      : this.svc.crearEjercicio(Ejercicio);

    request$.subscribe(() => {
      this.router.navigate(['/listarEjercicios']);
    });
  }
}