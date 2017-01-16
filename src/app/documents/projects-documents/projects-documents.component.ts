import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Document } from '../document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-projects-documents',
  templateUrl: './projects-documents.component.html',
  styleUrls: ['./projects-documents.component.scss'],
  providers: [DocumentService]
})
export class ProjectsDocumentsComponent implements OnInit {

  documents: Array<Document>;
  selectDocument: Document;
  errorMessage: any;

  constructor(
    private documentService: DocumentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.showDocuments();
  }

  showDocuments(): void {
    this.documentService.getProjectsDocuments()
                        .then(documents => this.documents = documents,
                             error =>  this.errorMessage = <any>error);
  }

  onSelect(document: Document) {
    this.selectDocument = document;
    this.router.navigate(['/document', this.selectDocument.documentId]);
  }

}

