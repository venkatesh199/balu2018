import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api message;
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