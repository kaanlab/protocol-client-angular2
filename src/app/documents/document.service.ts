import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Document } from './document';

@Injectable()
export class DocumentService {

  private documentsUrl = 'http://localhost:53702/api/documents';
  private publishedUrl = 'http://localhost:53702/api/published';
  private projectsUrl = 'http://localhost:53702/api/projects';

  constructor(private http: Http) { }

  getDocuments(): Promise<Array<Document>> {
        return this.http.get(this.documentsUrl)
                        .toPromise()
                        .then(response => response.json() as Array<Document>)
                        .catch(this.handleError);
  }

  getPublishedDocuments(): Promise<Array<Document>> {
        return this.http.get(this.publishedUrl)
                        .toPromise()
                        .then(response => response.json() as Array<Document>)
                        .catch(this.handleError);
  }

  getProjectsDocuments(): Promise<Array<Document>> {
        return this.http.get(this.projectsUrl)
                        .toPromise()
                        .then(response => response.json() as Array<Document>)
                        .catch(this.handleError);
  }

  getDocument(id: number): Promise<Document> {
    return this.getDocuments()
               .then(documents => documents.find(document => document.documentId === id));
  }

  addDocument(document: Document): Promise<Document> {
    let body = JSON.stringify(document);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.documentsUrl, body, options)
                        .toPromise()
                        .then(() => document)
                        .catch(this.handleError);
  }

  private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
      // return res.json() || { };
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
