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
import { ArticleComponent } from './components/article/article.component';
import { PreviewComponent } from './components/article/preview/preview.component';

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
        component: ParadigmComponent,
        data: {
          breadcrumb: '范式管理'
        }
      },{
        path: 'paradigm/param/:id',
        component: EditExperimentComponent,
        data: {
          breadcrumb: '参数详情'
        }
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
      },{
        path: 'article',
        component: ArticleComponent
      },{
        path: 'article/all/:id',
        component: ArticleComponent
      },
      {
        path: 'article/all/preview/:id',
        component: PreviewComponent
      }

    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
