import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartidoModule } from './compartido/compartido.module';
import { VistasModule } from './vistas/vistas.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptores/auth.interceptor';
import { LogroObtenidoComponent } from "./compartido/componentes/logro-obtenido/logro-obtenido.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidoModule,
    VistasModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
        easeTime: 300,
        extendedTimeOut: 15000,
        toastClass: 'ngx-toastr toast-custom',
        positionClass: 'toast-top-right',
    }),
],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
