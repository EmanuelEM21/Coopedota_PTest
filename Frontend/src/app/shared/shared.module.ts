import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

//Angular Material
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';

/*
This module includes all references to other modules that are used in the most components,
including the imports and the exports to allow the use of these modules in other components
*/
@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatTableModule, MatIconModule, MatTooltipModule, MatButtonModule, MatSnackBarModule,
     MatGridListModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule, HttpClientModule,
     MatProgressBarModule, RouterLink
  ], 
  exports: [
    CommonModule, MatTableModule, MatIconModule, MatTooltipModule, MatButtonModule, MatSnackBarModule,
     MatGridListModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule, HttpClientModule,
     MatProgressBarModule, RouterLink
  ]
})

export class SharedModule { }
