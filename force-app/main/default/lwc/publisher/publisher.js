import { LightningElement,wire } from 'lwc';
import { fire } from 'c/pubsub'; 

export default class Publisher extends LightningElement {
    
    handleClick(){
        console.log('event is firing...');
        let message = {
            "message":'Hello Pubsub Model'
        }
        fire('simplevent', message);
        console.log('event is fired...');
    }

}