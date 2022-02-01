import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialsModule } from '../materials/materials.module';
import { FooterComponent } from './components/footer/footer.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InternalServerErrorComponent,
    NotFoundComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TableComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
