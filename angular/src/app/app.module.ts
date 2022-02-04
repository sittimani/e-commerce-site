import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialsModule } from './materials/materials.module';
import { UserManagementModule } from './user-management/user-management.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { ErrorHandlerInterceptor } from './core/interceptor/error-handler.interceptor';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserManagementModule,
    SharedModule,
    MaterialsModule,
    ToastrModule.forRoot({
        timeOut: 3000,
        progressBar: true,
        progressAnimation: "increasing",
        preventDuplicates: true,
        closeButton: true
      })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: ErrorHandlerInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
