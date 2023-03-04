import { LightningElement } from 'lwc';
import getRecipeSearch from '@salesforce/apex/spoonacular_API_Integration.getRecipeSearch';
const column =[
    {label : 'Id', fieldName: 'id'},
    {label : 'Title', fieldName: 'title', type:'text'/*,wrapText:'wrap-text-min-lines'*/},
    {label : 'image Type', fieldName:'imageType', type:'text'},
];
export default class Spoonacular extends LightningElement {
    error;
    data = [];
    columns = column;
    recipename;
    quantity;
    connectedCallback(){
        this.fetchSpoonicularData();

    }
    fetchSpoonicularData(){
        //alert('enter into the search method');
        getRecipeSearch({query:this.recipename, intp:this.quantity}).then((result) => {
            //alert('enter into the result method');
            console.log(result);
            this.data = JSON.parse(result);
            this.error = undefined;

        })
        .catch((error) => {
            this.error = error;
            this.data = undefined;
        })
    }
    handleSearch(event){
        this.recipename = event.target.value;
    }
    handleQuantity(event){
        this.quantity = event.target.value;
    }
    handleSearchRecipe(){
        this.fetchSpoonicularData();
    }
}