import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api message;
    constructor(){
        super();
        console.log('I am fron child component consructor');
    }
    connectedCallback(){
        console.log('I am fron child component connected call back')
    }
    @api
    handleChild(name){
        console.log('name from parent',name);
        this.message = name;
    }
    handleChildComponent(){
        const event = new CustomEvent('btnclick', {
            detail: {  
                key:'GBM1479',
                value:'Moksha Sree Bala Gongolla'
            }
        });
        this.dispatchEvent(event);
    }

}