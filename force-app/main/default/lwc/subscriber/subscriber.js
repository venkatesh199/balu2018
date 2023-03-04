import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class Subscriber extends LightningElement {
    message;
    connectedCallback(){
        this.register();
    }
    register(){
        console.log('event is registered---');
        pubsub.register('simplevent', this.handleEvent.bind(this))
    }
    handleEvent(messageFromEvent){
        this.message = messageFromEvent ? JSON.stringify(messageFromEvent , null, "\t") : "no message is payload";

    }


}