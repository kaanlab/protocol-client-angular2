import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

// import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Document } from '../document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss'],
  providers: [DocumentService]
})
export class DocumentDetailComponent implements OnInit {

  document: Document = new Document();

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.documentService.getDocument(+params['id']))
        .subscribe(document => this.document = document);
  }

  goBack(): void {
    this.location.back();
  }

}
