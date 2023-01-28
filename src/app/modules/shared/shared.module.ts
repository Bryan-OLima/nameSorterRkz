import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { GenericDialogComponent } from './components/generic-dialog/generic-dialog.component';

@NgModule({
  declarations: [
    GenericDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    MatDialogModule,
    GenericDialogComponent
  ]
})
export class SharedModule { }
