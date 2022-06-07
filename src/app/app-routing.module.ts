import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { FieldComponent } from './components/field/field.component';
import { ParadigmComponent } from './components/paradigm/paradigm.component';
import { EditExperimentComponent } from './components/paradigm/edit-experiment/edit-experiment.component';
import { EditParadigmComponent } from './components/paradigm/edit-paradigm/edit-paradigm.component';
import { DimensionComponent } from './components/dimension/dimension.component';
import { PackageComponent } from './components/package/package.component';
import { BlockFromTypeComponent } from './components/block-from-type/block-from-type.component';

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
      },{
        path: 'paradigm/param/:id',
        component: EditExperimentComponent
      },{
        path: 'paradigm/info/:id',
        component: EditParadigmComponent
      },{
        path: 'dimension',
        component: DimensionComponent
      },{
        path: 'package',
        component: PackageComponent
      },{
        path:'block-form-type',
        component: BlockFromTypeComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
