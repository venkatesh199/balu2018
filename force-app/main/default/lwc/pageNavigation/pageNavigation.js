import { LightningElement,api } from 'lwc';

export default class PageNavigation extends LightningElement {
    @api totalrecords;
    @api pagenumber;
    @api totalpages;
    @api bDisableFirst;
    @api bDisableLast;
    nextPage(){
        const event = new CustomEvent('btnclick', {
            detail: {  
                key:'GBM1479',
                value:'Moksha Sree Bala Gongolla'
            }
        });
        this.dispatchEvent(event);
    }
    firstPage(){
        const event = new CustomEvent('btnclick1', {
            detail: {
                key:'test',
                value:'Moksha'
            }
        });
        this.dispatchEvent(event);
    }
    previousPage(){
        const event = new CustomEvent('btnclick2', {
            detail : {
                key:'test1',
                value:'Bala'
            }
        });
        this.dispatchEvent(event);
    }
    lastPage(){
        const event = new CustomEvent('btnclick3', {
            detail : {
                key:'test2',
                value:'Rajee'
            }
        });
        this.dispatchEvent(event);
    }
    bDisableFirst(){
        const event = new CustomEvent('btnclick4', {

        });
        this.dispatchEvent(event);
    }
}