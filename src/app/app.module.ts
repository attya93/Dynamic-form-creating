import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { DefinationDocumentComponent } from './defination-document/defination-document.component';
import { FieldsDocumentComponent } from './fields-document/fields-document.component';
import { FieldsDocumentItemComponent } from './fields-document-item/fields-document-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    DefinationDocumentComponent,
    FieldsDocumentComponent,
    FieldsDocumentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
