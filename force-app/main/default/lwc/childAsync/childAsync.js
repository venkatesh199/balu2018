import { LightningElement,api } from 'lwc';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';
export default class ChildAsync extends LightningElement {
    @api handleParentCall(){
        getSingleContact().then((result)=>{
            console.log('handleParentCall--result:',result);
            return result;
        })
        .catch((error)=>{
            console.log('eror---:',error);
        });
    }

}