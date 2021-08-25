import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldsDocumentItemComponent } from './fields-document-item/fields-document-item.component';
import { ParentFormComponent } from './parent-form/parent-form.component';

const routes: Routes = [
  { path: "", component: FieldsDocumentItemComponent },
  { path: "createDocument", component: ParentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
