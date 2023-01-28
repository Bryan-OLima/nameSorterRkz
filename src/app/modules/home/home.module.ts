import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { PersonListComponent } from './components/person-list/person-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
  
    HomeComponent,
       PersonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
