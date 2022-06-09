import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    children: [
      {
        path: 'all/:id',
        component: ArticleComponent,
        data: {
          breadcrumb: ''
        }
      },{
        path: 'all/preview/:id',
        component: PreviewComponent,
        data: {
          breadcrumb: '范式管理'
        }
      }
    ]
  },
];

export const ArticleRoutes = RouterModule.forChild(routes);
