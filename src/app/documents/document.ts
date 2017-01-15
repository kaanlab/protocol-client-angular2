import { DocumentType } from '../document-types/document-type';
import { Sender } from '../senders/sender';

export class Document {
    documentId: number;
    registrationDate: Date;
    projectNumber: string;
    projectDescription: string;
    documentType: DocumentType;
    sender: Sender;
    incomingDocumentNumber: string;
    contactName: string;
    contactPhone: string;
}
