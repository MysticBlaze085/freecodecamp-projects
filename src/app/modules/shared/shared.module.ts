import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormInputComponent, MaterialsModule } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapModule } from './bootstrap.module';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [DynamicFormInputComponent],
    imports: [CommonModule, MaterialsModule, ReactiveFormsModule, FormsModule, BootstrapModule],
    exports: [MaterialsModule, ReactiveFormsModule, FormsModule, BootstrapModule],
})
export class SharedModule {}
