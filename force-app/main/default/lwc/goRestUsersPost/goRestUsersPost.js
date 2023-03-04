import { LightningElement,track } from 'lwc';
import postGoRestUsers from '@salesforce/apex/goRestAPICallout.postGoRestUsers';
export default class GoRestUsersPost extends LightningElement {
    name;
    email;
    gender;
    status;
    error;
    @track goRestResponse = [];
    responseId;
    responseName;
    responseEmail;
    responseGender;
    responseStatus;
    @track gorestObj ={};
    connectedCallback(){
        //this.postGoRestUsersData();
    }
    createGorestUser(){
        //postGoRestUsers({JsonString :'{"name":"Pres. Test3 Malik","email":"malik_achintya_presTest3@champlin.net","gender":"female","status":"active"}'})
        postGoRestUsers({JsonString :JSON.stringify(this.gorestObj)})
        .then((response) => {
            console.log('response--:',JSON.parse(response));
            this.goRestResponse = JSON.parse(response);
            this.responseId = this.goRestResponse.id;
            this.responseName = this.goRestResponse.name;
            this.responseEmail = this.goRestResponse.email;
            this.responseGender = this.goRestResponse.gender;
            this.responseStatus = this.goRestResponse.status;
            this.error = undefined;
        })
        .catch((error) => {
            this.error = error;
        })
    }
    handleChange(event){
        if(event.target.label == 'Name'){
            this.name = event.target.value;
            //console.log('name--:'+this.name);
        }
        if(event.target.label == 'Email'){
            this.email = event.target.value;
        }
        if(event.target.label == 'Gender'){
            this.gender = event.target.value;
        }
        if(event.target.label == 'Status'){
            this.status = event.target.value;
        }
        this.gorestObj.name = this.name;
        this.gorestObj.email = this.email;
        this.gorestObj.gender = this.gender;
        this.gorestObj.status = this.status;

    }
}