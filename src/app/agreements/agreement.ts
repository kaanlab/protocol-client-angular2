import { AuthorityAgreement } from './authority-agreements/authority-agreement';

export class Agreement {
    agreementId: number;
    date: Date;
    returnDate: Date;
    agreementSignature: string;
    authorityAgreement: AuthorityAgreement;
}
