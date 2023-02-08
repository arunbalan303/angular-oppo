import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './product/home/home.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [{ path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
{path:"product",redirectTo:'product',pathMatch:'full'},
{path:"",component:HomeComponent},{path:"contact",component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
