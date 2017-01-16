import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DocumentsComponent } from '../documents/documents.component';
import { DocumentAddComponent } from '../documents/document-add/document-add.component';
import { DocumentDetailComponent } from '../documents/document-detail/document-detail.component';
import { PublishedDocumentsComponent } from '../documents/published-documents/published-documents.component';
import { ProjectsDocumentsComponent } from '../documents/projects-documents/projects-documents.component';

const routes: Routes = [
    { path: '', redirectTo: '/documents', pathMatch: 'full' },
    { path: 'documents',     component: DocumentsComponent },
    { path: 'document/add', component: DocumentAddComponent },
    { path: 'document/:id', component: DocumentDetailComponent },
    { path: 'documents/published', component: PublishedDocumentsComponent },
    { path: 'documents/projects', component: ProjectsDocumentsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
