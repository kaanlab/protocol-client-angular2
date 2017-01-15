import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  providers: [DocumentService]
})

export class DocumentsComponent implements OnInit {

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
    this.documentService.getDocuments()
                        .then(documents => this.documents = documents,
                             error =>  this.errorMessage = <any>error);
  }

  onSelect(document: Document) {
    this.selectDocument = document;
    this.router.navigate(['/document', this.selectDocument.documentId]);
  }

}
