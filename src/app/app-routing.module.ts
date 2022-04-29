import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { FieldComponent } from './components/field/field.component';
import { ParadigmComponent } from './components/paradigm/paradigm.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppComponent,
    children: [
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'form',
        component: FormComponent
      },{
        path: 'field',
        component: FieldComponent
      },{
        path: 'paradigm',
        component: ParadigmComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
