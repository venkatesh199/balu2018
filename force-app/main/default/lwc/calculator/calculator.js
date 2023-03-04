import { LightningElement,track } from 'lwc';
import addMethod from '@salesforce/apex/calculatorController.addMethod';
import devideMethod from '@salesforce/apex/calculatorController.devideMethod';

export default class Calculator extends LightningElement {
 @track result;
 error;
 firstNumber;
 secondNumber;
 add(){
    addMethod({x:this.firstNumber, y:this.secondNumber})
    .then((data) => {
        console.log('data--:',data);
        this.result = data;
      
    })
    .catch((error) => {
        this.error = error;
        this.result = undefined;
    })
 }
 division(){
    devideMethod({x:this.firstNumber, y:this.secondNumber})
    .then((data) => {
        console.log('data--:',data);
        this.result = data;
        console.log('this.result--:',this.result);
        this.error = undefined;
    })
    .catch((error) => {
        this.error = error;
        this.result = undefined;
    })
 }
 subtract(){
    this.result = parseInt(this.firstNumber) - parseInt(this.secondNumber);
 }
 multiply(){
    this.result = parseInt(this.firstNumber) * parseInt(this.secondNumber);
 }
 /*division(){
    this.result = parseInt(this.firstNumber) / parseInt(this.secondNumber);
 }*/
 handleChange(event){
    if(event.target.label== 'First Number'){
        this.firstNumber = event.target.value;
    }
    if(event.target.label== 'Second Number'){
        this.secondNumber = event.target.value;
    }
 }
}