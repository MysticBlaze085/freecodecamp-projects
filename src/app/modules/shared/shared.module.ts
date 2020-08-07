import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormInputComponent, MaterialsModule } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [DynamicFormInputComponent],
    imports: [CommonModule, MaterialsModule, ReactiveFormsModule, FormsModule, NgbModule],
    exports: [MaterialsModule, ReactiveFormsModule, FormsModule, NgbModule],
})
export class SharedModule {}
