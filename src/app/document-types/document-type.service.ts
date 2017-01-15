import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { DocumentType } from './document-type';

@Injectable()
export class DocumentTypeService {

  private documentTypesUrl = 'http://localhost:53702/api/documenttypes';

  constructor(private http: Http) { }

  getDocumentTypes(): Promise<Array<DocumentType>> {
        return this.http.get(this.documentTypesUrl)
                        .toPromise()
                        .then(response => response.json() as Array<DocumentType>)
                        .catch(this.handleError);
  }

  private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
          errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Promise.reject(errMsg);
  }

}
