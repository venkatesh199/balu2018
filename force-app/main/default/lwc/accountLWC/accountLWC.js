import { LightningElement, track, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAccountsRecords from '@salesforce/apex/AccountController.getAccountsRecords';
import uppdateAccountRecords from '@salesforce/apex/AccountController.uppdateAccountRecords';
import deleteMultipleAccRecords from '@salesforce/apex/AccountController.deleteMultipleAccRecords';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class AccountLWC extends NavigationMixin(LightningElement) {
    @track firstNumber;
    @track secondNumber;
    @track result;
    @api str;
    @api strs;
    @api accountId;
    selectedRecIds = [];
    @track selectedIds = {};
    @api selectedRecId;
    firstname;
    lastname;
    resultName;
    fname;
    mname;
    lname;
    finalName;
    @track accounts = [];
    error;
    connectedCallback() {
        this.fetchAccountrecords();
        //console.log('size--:'+this.accounts.length);
    }
    handleNavigation() {
        this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
        this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
                componentName: "c__NavigateToLWC"
            },
            state: {
                c__propertyValue: this.result
            }
        });
    }
    handleChange(event) {
        this.secondNumber = event.target.value;
    }
    handleFirstChange(event) {
        this.firstNumber = event.target.value;
        //console.log('this.firstNumber---:',this.firstNumber);
    }
    handleValueChange(event) {
        this.str = event.target.value;
        console.log('this.str---:', this.str);

    }
    handlemessage(event) {
        this.str = 'value is changed';
        this.template.querySelector('c-contact-l-w-c').childComponentMethod(this.str);
    }
    handlepassmessage(event) {
        this.strs = 'strs value chenged';
        this.template.querySelector('c-contact-l-w-c').childValueGetMethod(this.strs);

    }
    handleEvent(event) {
        let key = event.detail.key;
        let value = event.detail.value;
        this.str = key + ' ' + value;

    }
    handleFirstCahnge() {
        this.firstname = this.template.querySelector('.first').value;
        //console.log('fname--:',this.firstname);
    }
    handleSecondCahnge() {
        this.lastname = this.template.querySelector('.last').value;
        //console.log('lastname--:',this.lastname)
    }
    updateName() {
        this.resultName = this.firstname + ' ' + this.lastname;
        //console.log('result--:',this.resultName);

    }
    handleQueryAllChange(event) {
        if (event.target.label == "First Name") {
            this.fname = event.target.value;
        }
        if (event.target.label == "Middle Name") {
            this.mname = event.target.value;
        }
        if (event.target.label == "Last Name") {
            this.lname = event.target.value;
            console.log(this.lname);
        }

    }
    getFullName() {
        let nameArrays = this.template.querySelectorAll("lightning-input");
        let fullName = "";
        nameArrays.forEach(currentItem => {
            if (currentItem.label !== "First Query Name" && currentItem.label !== "Last Query Name") {
                fullName += (currentItem.value + " ");
            }
        });
        /*nameArrays.forEach(getValidInputnames); //Alternate way
        function getValidInputnames(item,Index){
            console.log('item name--:',item.value);
            if(item.label !=="First Query Name" && item.label !=="Last Query Name"){
                fullName +=(item.value + " ");
            }
            
        }*/
        this.finalName = fullName;
    }
    fetchAccountrecords() {
        getAccountsRecords()
            .then((result) => {
                //console.log('size--:'+result.length());
                console.log('result--:' + result);
                this.accounts = JSON.parse(result);
                //this.accounts = [ ...result];
                console.log('size--:' + this.accounts.length);
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.accounts = undefined;
            })
    }

    handleClickMe(event) {
        let index = event.target.dataset.name;
        alert(JSON.stringify(this.accounts[index].Name + '' + this.accounts[index].Industry));

    }
    updateRecords(event) {
        this.accountId = event.target.dataset.name;
        console.log('id--:', this.accountId);
        uppdateAccountRecords({ accId: this.accountId }).then(result => {
            console.log('result--:', result);
            const event = new ShowToastEvent({
                title: 'Success!',
                message: 'Phone Number have been Updated Successfully!',
                variant: 'SUCCESS'
            })
            this.dispatchEvent(event);
            setTimeout(() => {
                eval("$A.get('e.force:refreshView').fire();");
            }, 1000);
        })
            .catch(error => {
                this.error = error;
                console.log('Unable to update the record', JSON.stringify(this.error));
            })
    }
    allSelected(event) {
        let selectedRows = this.template.querySelectorAll('lightning-input');
        console.log('selectedRows---:', this.selectedRows);
        for (let i = 0; i < selectedRows.length; i++) {
            if (selectedRows[i].type === 'checkbox') {
                selectedRows[i].checked = event.target.checked;
            }
        }
    }
    deleteRecords() {
        let selectedRows = this.template.querySelectorAll('lightning-input');
        console.log('selectedRows---:', selectedRows);
        for (let i = 0; i < selectedRows.length; i++) {
            if (selectedRows[i].checked && selectedRows[i].type === 'checkbox') {
                this.selectedRecIds.push({
                    //Name:selectedRows[i].value,
                    Id: selectedRows[i].dataset.id
                })
            }
        }
        console.log('selected values---:', this.selectedRecIds[0].Id);
        for (let i = 0; i < this.selectedRecIds.length; i++) {
            this.selectedIds += this.selectedRecIds[i].Id + ',';
            console.log('this.selectedIds in for loop---:', JSON.stringify(this.selectedIds));
        }
        console.log('this.selectedIds---:', JSON.stringify(this.selectedIds));
        //deleteMultipleAccRecords({ids : this.selectedRecIds[0].Id}).then(result=>{
        deleteMultipleAccRecords({ ids: this.selectedRecIds }).then(result => {
            const event = new ShowToastEvent({
                title: 'Success!',
                messsage: 'Selected records have been deleted successfully!',
                variant: 'SUCCESS'
            })
            this.dispatchEvent(event);

        })
            .catch(error => {
                this.error = error;

            })
    }

}