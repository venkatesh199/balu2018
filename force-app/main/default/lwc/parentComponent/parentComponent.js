import { api, LightningElement } from 'lwc';
import LANG from '@salesforce/i18n/lang';
import DIR from '@salesforce/i18n/dir';

export default class ParentComponent extends LightningElement {
    lang = LANG;
    dir = DIR;
    @api parentMessage;
    name;
    rajee;
    renderValue;
    hasRendered  = true;
    constructor(){
        super();
        this.name = 'Moksha Sree Bala';
        console.log('I am from parent component constructor');
    }
    connectedCallback(){
        console.log('I am from parent component conected call back');
        this.rajee = 'Moksha Sree Bala';
        console.log('Rajee name--:',this.rajee);
        console.log('language name--:',this.lang);
        console.log('dir name--:',this.dir);
    }
    connectedCallback(){
        this.rajee = 'Moksha Sree Bala Gongolla';
        console.log('Rajee name--:',this.rajee);
    }
    renderedCallback(){
        if(this.hasRendered){
            this.renderValue = 'this is the rendered call back value';
            this.hasRendered = false;
        }
        
    }
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
        this.name = this.template.querySelector(".moksha").value;
        console.log('Name--:',this.name);
        console.log('this.parentMessage--',this.parentMessage);
    }
    handleRenderButton(){
        this.renderValue = 'This is the button clicked value';
        console.log('button value--:',this.renderValue);
    }
}