import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
import { LightningElement,track } from 'lwc';
const column =[
    {label : 'Name', fieldName: 'name'},
    {label : 'Email', fieldName: 'email', type:'email'/*,wrapText:'wrap-text-min-lines'*/},
    {label : 'Gender', fieldName:'gender', type:'text'},
    {label : 'Status', fieldName: 'status',type:'text'},
];
export default class GoRestApi extends LightningElement {
    data = [];
    columns = column;
    connectedCallback(){
        this.fetchUserData();
    }
    fetchUserData(){
        const callBackURL = 'https://gorest.co.in/public/v2/users';
        fetch(callBackURL, {method : "GET"})
        .then((response) => response.json())
        .then(repos=>{
            //console.log(repos);
            this.data = repos;
            //console.log(this.data);
        });
    }
}