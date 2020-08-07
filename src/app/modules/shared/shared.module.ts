import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormInputComponent, MaterialsModule } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [DynamicFormInputComponent],
    imports: [CommonModule, MaterialsModule, ReactiveFormsModule, FormsModule],
    exports: [MaterialsModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
