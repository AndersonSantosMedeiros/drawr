import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FlexLayoutModule, } from '@angular/flex-layout';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
  MatButtonToggleModule, MatSidenavModule
} from '@angular/material';

const LAYOUT_MODULES: any[] = [
  FlexLayoutModule,
];

const MATERIAL_MODULES: any[] = [
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
  MatButtonToggleModule, MatSidenavModule
];

/**
 * Module with common external modules and values normally used in any part of the application.
 */
@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    LAYOUT_MODULES,
  ],
  exports: [
    CommonModule,
    MATERIAL_MODULES,
    LAYOUT_MODULES,
  ]
})
export class SharedModule { }
