import { LightningElement, track, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';


export default class AccountListlwc extends LightningElement {
    @track accounts;
    @track error;
    @wire(getAccountList)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            console.log(error);
            this.error = error;
        }
    }
}