import { LightningElement } from 'lwc';
import getListContact from '@salesforce/apex/ContactController.getListContact';
import { getAccounts } from './asyncLearningService.js';

export default class AsyncLearning extends LightningElement {
    async handleCallNormal(){
        console.log('button is clicked whose label is Call Async Child Function Normally');
        let contact = await this.template.querySelector('c-child-async').handleParentCall();
        console.log('button click is finishing now & single contact is', contact);

    }
    handleCallfromCallback(){
        console.log('button is clicked whose label is Call Async Function from callback In Parent');
        getListContact().then(async (result)=>{
            console.log('list contact from server', result);
            //let contact = await this.template.querySelector('c-child-async').handleParentCall();
            let contact = await this.template.querySelector('c-child-async').handleParentCall();
            console.log('button click is finishing now & single contact is', contact);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    async handleCallfromService(){
        console.log('button is clicked whose label is Call Async Function from Service JS In Parent');
        let accountList = await getAccounts();
        console.log('button click is finishing now & list of account is ', accountList);
    }
}