import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/items/item-list/item-list.component';
import {AddItemComponent} from "./components/add-item/add-item.component";
import {EditItemComponent} from "./components/edit-item/edit-item.component";

const routes: Routes = [
  {
    path: '',
    component: ItemListComponent
  },
  {
    path: 'items',
    component: ItemListComponent
  },
  {
    path: 'items/add',
    component: AddItemComponent
  },
  {
    path: 'items/edit/:id',
    component: EditItemComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
