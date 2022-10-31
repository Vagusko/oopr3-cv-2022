import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./user/user-list/user-list.component";
import {AddUserFormComponent} from "./user/add-user-form/add-user-form.component";
import {ProductListComponent} from "./product/product-list/product-list.component";

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'user/add', component: AddUserFormComponent},
  {path: 'products', component: ProductListComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
