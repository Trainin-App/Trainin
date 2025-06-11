import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesComponent } from './planes/planes.component';
import { PoliticasPrivacidadComponent } from './politicas-privacidad/politicas-privacidad.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';
import { CrearPlanEntrenamientoComponent } from './crear-plan-entrenamiento/crear-plan-entrenamiento.component';
import { CompartidoModule } from '../compartido/compartido.module';

import { InicioRutinaComponent } from './inicio-rutina/inicio-rutina.component';
import { FinalizacionRutinaComponent } from './finalizacion-rutina/finalizacion-rutina.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { DetallePlanComponent } from './detalle-plan/detalle-plan.component';
import { RealizarEjercicioComponent } from './realizar-ejercicio/realizar-ejercicio.component';
import { PlanPremiumComponent } from './plan-premium/plan-premium.component';
import { InformacionEjercicioComponent } from './informacion-ejercicio/informacion-ejercicio.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CorreccionPosturaComponent } from './correccion-postura/correccion-postura.component';
import { CalibracionCamaraComponent } from './calibracion-camara/calibracion-camara.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerificarEmailComponent } from './verificar-email/verificar-email.component';
import { LogrosComponent } from './logros/logros.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PagoExitosoComponent } from './pago-exitoso/pago-exitoso.component';
import { ListadoDeEjerciciosComponent } from './listado-de-ejercicios/listado-de-ejercicios.component';
import { FormAdminComponent } from './form-admin/form-admin.component';

@NgModule({

  declarations: [
    PlanesComponent,
    PoliticasPrivacidadComponent,
    PreguntasFrecuentesComponent,
    TerminosCondicionesComponent,
    CrearPlanEntrenamientoComponent,
    InicioRutinaComponent,
    FinalizacionRutinaComponent,
    RegistroComponent,
    InicioComponent,
    IniciarSesionComponent,
    DetallePlanComponent,
    RealizarEjercicioComponent,
    PlanPremiumComponent,
    InformacionEjercicioComponent,
    CorreccionPosturaComponent,
    CalibracionCamaraComponent,
    VerificarEmailComponent,
    PerfilComponent,
    LogrosComponent,
    PerfilComponent,
    PagoExitosoComponent,
    ListadoDeEjerciciosComponent,
    FormAdminComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CompartidoModule,
    NgbTooltipModule,
    BrowserAnimationsModule,
  ],
  exports: [
    PlanesComponent,
    PoliticasPrivacidadComponent,
    PreguntasFrecuentesComponent,
    TerminosCondicionesComponent,
    CrearPlanEntrenamientoComponent,
    FinalizacionRutinaComponent,
    InicioComponent,
    PerfilComponent,
    PlanPremiumComponent
  ]
})
export class VistasModule { }