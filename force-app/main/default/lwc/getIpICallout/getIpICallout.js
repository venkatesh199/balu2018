import { LightningElement,track } from 'lwc';

export default class GetIpICallout extends LightningElement {
    @track myIp;

    getIp(){
        console.log('enter into get ip');
        const calloutURL = 'https://api.ipify.org?format=json';
        fetch(calloutURL,{method :"GET"})
        .then((response) =>response.json())
        .then(repos =>{
            console.log('repos ip',repos.ip);
            this.myIp = repos.ip;
            console.log('myIp--:',this.myIp);
        });
    }

}