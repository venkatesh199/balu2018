import { LightningElement,track } from 'lwc';
const columns =[
    {label:'Vegetrian', fieldName:'vegetarian',type:'boolean'},
    {label:'isHealthy?' ,fieldName : 'veryHealthy', type:'boolean'}
]

export default class SpoonicularRecipeData extends LightningElement {
    spoonicularData = [];
    columns = columns;
    connectedCallback(){
        console.log('enter into the connected callback');
        this.fetchspoonicularData();
    }
    fetchspoonicularData(){
        const calloutURL = 'https://api.spoonacular.com/recipes/random?apiKey=91335c3897094336aa1787926210aa63';
        fetch(calloutURL,{method:"GET"})
        .then((response) => response.json)
        .then(result =>{
            console.log(result);
            this.spoonicularData = result;
            console.log(this.spoonicularData);
        });
    }
}