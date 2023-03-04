import { LightningElement } from 'lwc';

export default class FormValidation extends LightningElement {
    error ={
        "First Name":'Please enter the first name',
        "Last Name":'Please enter the last name',

    }
    checkValidations(){
        let inputArrys = this.template.querySelectorAll("lightning-input");
        inputArrys.forEach(element => {
            let labelName = element.label;
            let val = element.value;
            if(!val){
                //element.setCustomValidity(this.error[labelName]);
                element.setCustomValidity('Please enter the required fileds in the form')
            }else{
                element.setCustomValidity("");
            }
            element.reportValidity();
            
        });
    }
}