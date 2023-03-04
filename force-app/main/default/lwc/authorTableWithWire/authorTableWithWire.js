import { LightningElement,wire,track,api } from 'lwc';
import getAuthorRecords from '@salesforce/apex/AuthorController.getAuthorRecords';
import createAuthorRecords from '@salesforce/apex/AuthorController.createAuthorRecords';
import deleteAthuorRecords from '@salesforce/apex/AuthorController.deleteAthuorRecords';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import updateAuthorRecs from '@salesforce/apex/AuthorController.updateAuthorRecs';

export default class AuthorTableWithWire extends LightningElement {
    @track authorRecords = [];
    error;
    searchKey = '';
    isShowModal = false;
    isUpdateModal = false;
    @track recordId;
    @track authorObj = {};
    @track authorObjRecs = {};
    @api totalrecordsat;
    @api pageNumber = 1;
    @api totalpages;
    @api pageSize = 5;
    @track recordsToDisplay;
    @api bDisableLast;
    @api bDisableFirst;
    connectedCallback(){
        this.AuthorRecordsLoad();
    }
    /*@wire(getAuthorRecords,{ searchKey:'$searchKey'})
    WiredauthorRecords({error,data}){
        if(data){
            this.authorRecords = data;
            this.error = undefined;
        }else if(error){
            this.error =error;
            this.authorRecords = undefined;
        }
    }*/
    AuthorRecordsLoad(){
        getAuthorRecords({searchKey:this.searchKey})
        .then(data=>{
            console.log('data--:',data);
            this.authorRecords = data;
            console.log('size---:',this.authorRecords.length);
            this.totalrecordsat = this.authorRecords.length;
            this.paginationHelper();
            this.error = undefined;
        })
        .catch(error=>{
            this.error =error;
            this.authorRecords = undefined;
        })
    }
    firstPage(){
        this.pageNumber = 1;
        this.paginationHelper();
    }
    lastPage(){
        this.pageNumber = this.totalpages;
        this.paginationHelper();
    }
    nextPage(){
        this.pageNumber = this.pageNumber + 1;
        this.paginationHelper();
    }
    previousPage(){
        this.pageNumber = this.pageNumber -1;
        this.paginationHelper();
    }
    /*bDisableFirst(){
        return this.pageNumber == 1;
    }
    bDisableLast(){
        return this.pageNumber == this.totalpages;
    }*/
    paginationHelper(){
        this.recordsToDisplay = [];
        this.totalpages = this.totalrecordsat / this.pageSize;
        if(this.pageNumber <= 1){
            this.pageNumber = 1;
        }else if(this.pageNumber >= this.totalpages){
            this.pageNumber = this.totalpages;
        }
        for (let i = (this.pageNumber - 1) * this.pageSize; i < this.pageNumber * this.pageSize; i++) {
            if (i === this.totalrecordsat) {
                break;
            }
            this.recordsToDisplay.push(this.authorRecords[i]);
        }

    }
    
    handleKeyChange(event){
        this.searchKey = event.target.value.toLowerCase();;
    }
    hideModalBox(){
       this.isShowModal = false; 
       this.isUpdateModal = false;
    }
    showModal(){
        this.isShowModal = true;
    }
    handleChange(event){
        if(event.target.label == 'Author Name'){
            this.authorObj.name = event.target.value;
        }
        if(event.target.label == 'Age'){
            this.authorObj.age = event.target.value;
        }
        if(event.target.label == 'Active'){
            this.authorObj.active = event.target.checked;
        }
        this.authorObjRecs = JSON.stringify(this.authorObj);
    }
    createAuthorRecords(){
        createAuthorRecords({author : this.authorObjRecs})
        .then(result =>{
            const event = new ShowToastEvent({
                title :'Success!',
                variant:'SUCCESS',
                message :'Author Record is Created Successfully!'
            });
            this.dispatchEvent(event);
            this.isShowModal = false;
            setTimeout(() => {
                eval("$A.get('e.force:refreshView').fire();");
            }, 1000); 

        })
    }
    deleteAuthorRecords(event){
        this.recordId = event.currentTarget.dataset.name;
        console.log('id--:',this.recordId);
        deleteAthuorRecords({ str:this.recordId})
        .then(result=>{
            const event = new ShowToastEvent({
                title : 'Success!',
                message : 'Record Created Successfully!',
                variant : 'SUCCESS'
            });
            this.dispatchEvent(event);
            setTimeout(() => {
                eval("$A.get('e.force:refreshView').fire();");
           }, 1000); 
        })
    }
    /*handleValidation(){
        let inputArrys = this.template.querySelectorAll("lightning-input");
        console.log('inputArrys--:',inputArrys);
        inputArrys.forEach(item => {
            let label = item.label;
            let val = item.value;
            console.log('label---:',label);
            console.log('value---:',value);
        });
    }*/
    editRecord(){
        this.isUpdateModal = true;
    }
    updateAuthorRecords(){
        //let recId = this.template.
        updateAuthorRecs({recs : this.authorObjRecs})
        .then(result=>{
            const event = new ShowToastEvent({
                title  : "Success!",
                variant :"SUCCESS",
                brand :'The record have been successfully updated!'
            })
            this.dispatchEvent(event);

        })
        .catch(error=>{
            this.error = error;
        })
    }


}