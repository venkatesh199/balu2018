import { api, LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    @api parentMessage;
    handleClick(){
        this.parentMessage = 'Moksha Sree';
        console.log('message',this.parentMessage);
        this.template.querySelector('c-child-component').handleChild(this.parentMessage);
    }
    handleChildButton(event){
        let key = event.detail.key;
        let value = event.detail.value;
        console.log('key--',key);
        console.log('value--',value);
        this.parentMessage = key +' '+value;
        console.log('this.parentMessage--',this.parentMessage);

    }

}