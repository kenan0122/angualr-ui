import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { DropDownButtonComponent } from './drop-down-button.component';

@NgModule({
    declarations: [DropDownButtonComponent],
    exports: [DropDownButtonComponent],
    imports: [
        CommonModule,
        NzButtonModule,
        NzDropDownModule
    ]
})

export class DropDownButtonModule { }
