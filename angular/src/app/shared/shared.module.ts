import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialsModule } from '../materials/materials.module';
import { FooterComponent } from './components/footer/footer.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InternalServerErrorComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
