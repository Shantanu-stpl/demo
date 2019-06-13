import { NgModule } from '@angular/core';

import {
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule, 
    MatOptionModule, 
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule
} from '@angular/material';

const modules = [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule, 
    MatOptionModule, 
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}