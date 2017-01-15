import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { DocumentsComponent } from './documents/documents.component';
import { DocumentAddComponent } from './documents/document-add/document-add.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentTypesComponent } from './document-types/document-types.component';
import { SendersComponent } from './senders/senders.component';
import { AgreementsComponent } from './agreements/agreements.component';
import { AuthorityAgreementsComponent } from './agreements/authority-agreements/authority-agreements.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    DocumentAddComponent,
    DocumentDetailComponent,
    DocumentTypesComponent,
    SendersComponent,
    AgreementsComponent,
    AuthorityAgreementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
