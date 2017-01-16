import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Document } from '../document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-published-documents',
  templateUrl: './published-documents.component.html',
  styleUrls: ['./published-documents.component.scss'],
  providers: [DocumentService]
})
export class PublishedDocumentsComponent implements OnInit {

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
    this.documentService.getPublishedDocuments()
                        .then(documents => this.documents = documents,
                             error =>  this.errorMessage = <any>error);
  }

  onSelect(document: Document) {
    this.selectDocument = document;
    this.router.navigate(['/document', this.selectDocument.documentId]);
  }

}
