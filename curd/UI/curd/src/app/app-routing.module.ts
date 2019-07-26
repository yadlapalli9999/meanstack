import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurdCompComponent } from './curd-comp/curd-comp.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:'curd',component:CurdCompComponent},
  {path:'product', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
