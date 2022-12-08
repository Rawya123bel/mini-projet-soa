import { Telephone } from './telephone.model';
export class TelephoneWrapper{
_embedded!: { telephonescat: Telephone[]};
}