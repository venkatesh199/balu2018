import { LightningElement,track, wire,api } from 'lwc';
import getBookRecords from '@salesforce/apex/BookController.getBookRecords';
import createBook from '@salesforce/apex/BookController.createBook';
import updateBookRecord from '@salesforce/apex/BookController.updateBookRecord';
import searchBooks from '@salesforce/apex/BookController.searchBooks';
import BOOK_OBJECT from '@salesforce/schema/Book__c';
import CATEGORY_FIELD from '@salesforce/schema/Book__c.Category__c';
import NAME_FIELD from '@salesforce/schema/Book__c.Name';
import Price_Field from '@salesforce/schema/Book__c.Price__c';
import Count_Field from '@salesforce/schema/Book__c.Count__c';
import PUBLISH_TYPE from '@salesforce/schema/Book__c.Publish_Type__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import {deleteRecord} from 'lightning/uiRecordApi';
import { updateRecord } from 'lightning/uiRecordApi';
import getPickListValues from '@salesforce/apex/BookController.getPickListValues';
export default class CreateBookRecords extends NavigationMixin (LightningElement) {
    @track bookList = [];
    @track error;
    @track isShowModal = false;
    @track isEditModal = false;
    @track category = CATEGORY_FIELD;
    @track price = Price_Field;
    @track count = Count_Field;
    @track name = NAME_FIELD;
    @track publishtype = PUBLISH_TYPE;
    @track error;
    @track recordId;
    @track bookRow = {};
    searchKey = '';
    @track records = [];
    @track recordsToDisplay;
    sortedColumn;
    sortedDirection = 'asc';
    nameUpBool;
    nameDWBool;
    @track isFirstPage;
    @track isLastPage;
    @track pickListOptions = [];
    //pickListValue;
    @api totalrecordscb;
    @api totalpagescb;
    @api pagenumbercb;
    @api pageSize = 5;
    @api pageNumber = 1;

    @track rec = {
        Category__c : this.category,
        Price__c : this.price,
        Count__c : this.count,
        Name : this.name,
        Publish_Type__c :this.publishtype
    }
    @track bookRecords ={};
    @track bookRecordsStr ={};
    error ={
        Name: 'Please enter name field',
        Category: 'Please enter category field',
        Count: 'Please enter Count field',
        Price: 'Please enter Price field',
    }

    connectedCallback(){
        this.fetchbookRecords();
        this.getPickListOptions();
    }
    searchKeyword(event){
        this.searchKey = event.target.value.toLowerCase();
        console.log('searchKey--:',this.searchKey);

    }
    
    fetchbookRecords(){
            getBookRecords({searchKey:this.searchKey})
            //searchBooks({searchKey:this.searchKey})
            .then(result =>{
                console.log('result--:',result);
                console.log('result length--:',result.length);
                this.bookList = result;
                this.records = [...JSON.parse(result)];
                this.totalrecordscb = this.records.length;
                console.log('total records--:',this.totalRecords);
                console.log('this.records JSON.parse(result)--:',JSON.parse(result));
                this.paginationHelper();
                this.error = undefined;
            })
            .catch(error =>{
                this.error = error;
                this.records = undefined;
    
            })
    }
    paginationHelper() {
        this.recordsToDisplay = [];
        // calculate total pages
        this.totalpagescb = Math.ceil(this.totalrecordscb / this.pageSize);
        console.log('this.totalpagescb',this.totalpagescb);
        // set page number 
        if (this.pageNumber <= 1) {
            this.pageNumber = 1;
        } else if (this.pageNumber >= this.totalpagescb) {
            this.pageNumber = this.totalpagescb;
        }
        // set records to display on current page 
        for (let i = (this.pageNumber - 1) * this.pageSize; i < this.pageNumber * this.pageSize; i++) {
            if (i === this.totalrecordscb) {
                break;
            }
            console.log('i value',i);
            console.log('records[i]',this.records[i]);
            this.recordsToDisplay.push(this.records[i]);
        }
        console.log('this.recordsToDisplay',this.recordsToDisplay);
    }
    nextPage(){
        alert('i am in next page');
        this.pageNumber = this.pageNumber + 1;
        this.paginationHelper();
    }
    firstPage(){
        this.pageNumber = 1;
        this.paginationHelper();
    }
    previousPage(){
        this.pageNumber = this.pageNumber - 1;
        this.paginationHelper();
    }
    lastPage(){
        this.pageNumber = this.totalpagescb;
        this.paginationHelper();
    }
        
    showModal(){
        this.isShowModal = true;
    }
    hideModalBox(){
        this.isShowModal = false;
        this.isEditModal = false;
    }
    handleChange(event){
        if(event.target.label == 'Name'){
            this.rec.Name = event.target.value;
        }
        if(event.target.label == 'Category'){
            this.rec.Category__c = event.target.value;
        }
        if(event.target.label == 'Publish Type'){
            this.rec.Publish_Type__c = event.target.value;
            console.log('Publish Type--:',this.rec.Publish_Type__c);

        }
        if(event.target.label == 'Count'){
            this.rec.Count__c = event.target.value;
            //console.log('count--:',this.rec.Count__c);
        }
        if(event.target.label == 'Price'){
            this.rec.Price__c = event.target.value;
            //console.log('price--:',this.rec.Price__c);
        }
    }
    handleBookChange(event){
        if(event.target.label == 'Name'){
            this.bookRecords.name = event.currentTarget.dataset.name;
            console.log('Name--:',this.bookRecords.name);
        }
        if(event.target.label == 'Category'){
            this.bookRecords.category = event.currentTarget.dataset.name;
            console.log('category--:',this.bookRecords.category);
        }
        if(event.target.label == 'Count'){
            //this.bookRecords.count = event.currentTarget.dataset.name;
            this.bookRecords.count = event.currentTarget.dataset.name;
            console.log('count--:',this.bookRecords.count);
        }
        if(event.target.label == 'Price'){
            this.bookRecords.price = event.currentTarget.dataset.name;
            console.log('price--:',this.bookRecords.price);
        }
        this.bookRecordsStr = JSON.stringify(this.bookRecords);
        console.log('bookrecordStr--:',this.bookRecordsStr);
    }
    
    createBookRecord(){
        createBook({bk : this.rec})
        .then(result =>{
            console.log('result--:',result);
            const event = new ShowToastEvent({
                title : 'Success!',
                variant : 'success',
                message : 'Record{0} Created Successfully!'
            });
            this.dispatchEvent(event);
            this.isShowModal = false;
            setTimeout(() => {
                eval("$A.get('e.force:refreshView').fire();");
           }, 1000); 

        })
    }
    deleteBooks(event){
        this.recordId = event.currentTarget.dataset.name;
        console.log('deleteBookId--:',this.recordId);
        deleteRecord(this.recordId)
        .then(()=>{
            const event = new ShowToastEvent({
                title:'Success!',
                variant: 'success',
                message : 'Record deleted successfully!'
            });
            this.dispatchEvent(event);
            setTimeout(() => {
                eval("$A.get('e.force:refreshView').fire();");
           }, 1000); 

        })
        .catch(error=>{
            this.error = error;
        })

    }  
    editRecord(){
        this.isEditModal = true;
    }  
    editBookRecord(event){
        this.recordId = event.currentTarget.dataset.name;
        console.log('recordId--:',this.recordId);
        updateBookRecord({booksRecs :this.bookRecordsStr})
        .then(result=>{
            console.log('result--:',result);
            const event = new ShowToastEvent({
                title :'Success!',
                variant : 'Success',
                message :'Record Successfully updated!'
            });
            this.dispatchEvent(event);
            setTimeout(() => {
                eval("$A.get('e.force:refreshView').fire();");
           }, 1000); 

        })
        .catch(error=>{
            this.error = error;
        })
    }

    /*handleKeyChange( event ) {  
          
        const searchKey = event.target.value.toLowerCase();  
        console.log( 'Search Key is' + searchKey );
 
        if ( searchKey ) {  

            this.records = this.bookList;
            console.log('this.records--:',this.records);
 
             if ( this.records ) {

                let recs = [];
                for ( let rec of this.records ) {

                    console.log( 'Rec is' + JSON.stringify( rec ) );
                    let valuesArray = Object.values( rec );
                    console.log( 'valuesArray is' + valuesArray );
 
                    for ( let val of valuesArray ) {
                        
                        if ( val ) {

                            if ( val.toLowerCase().includes( searchKey ) ) {

                                recs.push( rec );
                                break;
                        
                            }

                        }

                    }
                    
                }

                console.log( 'Recs are' + JSON.stringify( recs ) );
                this.records = recs;

             }
 
        }  else {

            this.records = this.bookList;

        }
 
    }*/
    sortRecs( event ) {
        this.nameUpBool = false;
        this.nameDWBool = false;
        this.catUpBool = false;
        this.catDWBool = false;
        this.cUpBool = false;
        this.cDWBool = false;
        this.cbnUpBool = false;
        this.cbnDWBool = false;
        this.pUpBool = false;
        this.pDWBool = false;
        let colName = event.target.name;
        console.log( 'Column Name is ' + colName );
        if ( this.sortedColumn === colName ) {
            this.sortedDirection = ( this.sortedDirection === 'asc' ? 'desc' : 'asc' );
        }
        else {
            this.sortedDirection = 'asc';
        }

        let isReverse = this.sortedDirection === 'asc' ? 1 : -1;

        if ( colName )
            this.sortedColumn = colName;
        else
            colName = this.sortedColumn;

        switch ( colName ) {
            case "Name":
            if ( this.sortedDirection == 'asc' )
                this.nameUpBool = true;
            else
                this.nameDWBool = true;
            break;
            case "Category":
            if ( this.sortedDirection == 'asc' )
                this.catUpBool = true;
            else
                this.catDWBool = true;
            break;
            case "Price":
            if ( this.sortedDirection == 'asc' )
                this.pUpBool = true;
            else
                this.pDWBool = true;
            break;
            case "Count":
            if ( this.sortedDirection == 'asc' )
                this.cUpBool = true;
            else
                this.cDWBool = true;
            break;
            case "CreatedByName":
            if ( this.sortedDirection == 'asc' )
                this.cbnUpBool = true;
            else
                this.cbnDWBool = true;
            break;
            case "PublishType":
            if ( this.sortedDirection == 'asc' )
                this.ptUpBool = true;
            else
                this.ptDWBool = true;
            break;
        }

        // sort the data
        this.records = JSON.parse( JSON.stringify( this.records ) ).sort( ( a, b ) => {
            if(colName == 'Price' && colName == 'Count'){
                a = a[ colName ] ? a[ colName ]: ''; // Handle null values
                b = b[ colName ] ? b[ colName ]: '';

            }else{
                a = a[ colName ] ? a[ colName ].toLowerCase() : ''; // Handle null values
                b = b[ colName ] ? b[ colName ].toLowerCase() : '';
            }
            
            return a > b ? 1 * isReverse : -1 * isReverse;
        });;
    }
    getPickListOptions(){
        getPickListValues().then(result=>{
            console.log('publish type options',result);
            result.forEach(currentItem => {
                console.log('currentItem---:',currentItem);
                this.pickListOptions.push({
                    label : currentItem,
                    value : currentItem
                });
            });
            //this.pickListOptions = { ...result}; 
            console.log('PT OPTIONS',this.pickListOptions);
            this.error = undefined;
            console.log('result',result);
        })
        .catch(error=>{
            this.error = error;
            this.pickListOptions = undefined;
        })
    }
    handlePTChange(event){
        this.picklistVal = event.target.value;
        this.rec.Publish_Type__c = event.target.value;
        console.log('pick value',this.picklistVal);
    }
    @track picklistVal;
    @wire(getPickListValues, {customObjInfo: {'sobjectType' : 'Book__c'},
    selectPicklistApi: 'Publish_Type__c'}) selectTargetValues;
    naviagteToLWC(){
        
    }
    
}