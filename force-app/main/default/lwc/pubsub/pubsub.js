import { LightningElement } from 'lwc';

export default class Pubsub extends LightningElement {
    
    callbacks = {};
    register = (eventName , callback) =>{
        if(!callbacks[eventName]){
            this.callbacks[eventName] = new Set();
        }
        this.callbacks[eventName].add(callback);
    };
    unregister = (eventName , callback) =>{
        if(this.callbacks[eventName]){
            this.callbacks[eventName].delete(callback);
        }
    };
    unregisterAll = () =>{
        this.callbacks = {};
    };
    fire = (eventName , payload) =>{
        if(this.callbacks[eventName]){
            this.callbacks[eventName].forEach(callback => {
                try {
                    callback(payload);
                }catch (error){
                    //fail silently
                }
            });
        }
    };
    export = {
        register,
        unregister,
        fire,
        unregisterAll
    };

}