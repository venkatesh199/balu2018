import { LightningElement } from 'lwc';
import getGoRestUsers from '@salesforce/apex/goRestAPICallout.getGoRestUsers';
const column =[
    {label : 'Name', fieldName: 'name'},
    {label : 'Email', fieldName: 'email', type:'email'/*,wrapText:'wrap-text-min-lines'*/},
    {label : 'Gender', fieldName:'gender', type:'text'},
    {label : 'Status', fieldName: 'status',type:'text'},
];

export default class GoRestAPICallout extends LightningElement {
    data = [];
    columns = column;
    connectedCallback(){
        this.getGorestUsersData();

    }
    getGorestUsersData(){
        getGoRestUsers({}).then((result) => {
            //console.log(result);
            this.data = JSON.parse(result);
            //console.log(data);
        })
    }
}