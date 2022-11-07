import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./users/user-list/user-list.component";
import {AddUserFormComponent} from "./users/add-user-form/add-user-form.component";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {NgModule} from "@angular/core";

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
export class AppRoutingModule { }
