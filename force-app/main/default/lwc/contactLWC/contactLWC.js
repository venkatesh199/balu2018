import { LightningElement,api,track,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactsController.getContacts';

export default class ContactLWC extends LightningElement {
    @api propertyValue;
    @api item;
    @api items;
    @track contactdData = [];
    isShowContacts = false;
    error;
    isShowModel = false;
    @track selectedContacts = [];
    selectedRecordsCount;
    @api
    childComponentMethod(name){
        console.log('item name',name);
        this.item = name;
        console.log('item name',this.item);

    }
    childValueGetMethod(value){
        console.log('value--:',value);
        this.items = value;
        console.log('value--:',value);

    }
    handleClick(){
        const event = new CustomEvent('btnclick', {
            detail: {  
                key:'GBM1479',
                value:'Bala'
            }
        });
        this.dispatchEvent(event);
    }
    @wire(getContacts)
    contacts(result){
        //console.log('size---:'+result.size())
        if(result.data){
            this.isShowContacts = true;
            this.contactdData = result.data;
            this.error = undefined;
        }else if(result.error){
            this.eror = result.error;
            this.contactdData = undefined;
        }
    }
    selectAll(event){
        let rowSelected = this.template.querySelectorAll('lightning-input');
        for(let i=0; i<rowSelected.length; i++){
            if(rowSelected[i].type === 'checkbox'){
                rowSelected[i].checked = event.target.checked;
            }
        }
    }
    cancil(){
        this.isShowModel = false;
    }
    showContacts(){
        this.isShowModel = true;
        this.selectedContacts = [];
        let rowSelected = this.template.querySelectorAll('lightning-input');
        console.log('row selected--',rowSelected)
        for(let i = 0; i < rowSelected.length; i++) {
            if(rowSelected[i].checked && rowSelected[i].type === 'checkbox') {
                this.selectedContacts.push({
                    Name: rowSelected[i].value,
                    Id: rowSelected[i].dataset.id
                })
            }
        }
        this.selectedRecordsCount = this.selectedContacts.length;
    }
}