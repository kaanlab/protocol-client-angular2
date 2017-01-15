import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { Document } from '../document';
import { DocumentService } from '../document.service';
import { DocumentType } from '../../document-types/document-type';
import { DocumentTypeService } from '../../document-types/document-type.service';
import { Sender } from '../../senders/sender';
import { SenderService } from '../../senders/sender.service';

@Component({
  selector: 'app-document-add',
  templateUrl: './document-add.component.html',
  styleUrls: ['./document-add.component.scss'],
  providers: [
    DocumentService,
    DocumentTypeService,
    SenderService
  ]
})

export class DocumentAddComponent implements OnInit {

  document: Document;
  documentTypes: Array<DocumentType>;
  senders: Array<Sender>;
  errorMessage: any;

  constructor(
    private documentService: DocumentService,
    private documentTypeService: DocumentTypeService,
    private senderService: SenderService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.document = new Document();
    this.showSender();
    this.showDocumentType();
  }

  showDocumentType() {
    this.documentTypeService.getDocumentTypes()
                            .then(documentTypes => this.documentTypes = documentTypes,
                                  error =>  this.errorMessage = <any>error);
  }

  showSender() {
    this.senderService.getSenders()
                            .then(senders => this.senders = senders,
                                  error =>  this.errorMessage = <any>error);
  }

  onSave() {
    this.documentService.addDocument(this.document)
                        .then(() => this.goBack())
                        .catch(error => this.errorMessage = error);

  }

  goBack(): void {
    this.location.back();
  }

}
