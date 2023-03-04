import { LightningElement,track } from 'lwc';
import labelName from '@salesforce/label/c.Science';
// Example :- import greeting from '@salesforce/label/c.greeting';'
const columns = [
    { label: labelName, fieldName: 'science', type: 'Integer' },
    { label: 'Maths', fieldName: 'Maths', type: 'Integer' },
    { label: 'Telugu', fieldName: 'Telugu', type: 'Integer'},
    { label: 'Country', fieldName: 'counrty', type: 'string'}
];

export default class JavaScriptExamples extends LightningElement {
    @track data = [];
    columns = columns;
    totalscienceMarks = 0;
    totalMathsMarks = 0;
    totalTeluguMarks = 0;
    @track studentsData = [];
    connectedCallback(){
        this.handleClick();
    }
    //var, let, const
    handleClick(){
        //let str = '';
        /*const studentAge = 10;
        console.log(studentAge);
        var str;
        for(let i=0; i<=10; i++){
            console.log(i);
            str = i;
            console.log(str);

        }
        console.log(str);
        //String number boolean null undefined
        const stundentName = 'Bala Gongolla';
        const studentAge = 10;
        const isStudnet = true;
        const isStudentOrEmployee = null;
        const isStudentOrFarmar = undefined;
        console.log(typeof(studentAge));
        console.log(typeof(isStudnet));
        console.log(typeof(isStudentOrEmployee));
        console.log(typeof(isStudentOrFarmar));*/
        /*const str = "The quick brown fox jumps over the lazy dog.";
        console.log(str);
        console.log(str.length);
        console.log(str.split(' '));
        console.log(str.substring(0,10));
        console.log(str.toUpperCase());
        console.log(str.toLowerCase());
        console.log(str.slice(10,16));*/
        /*const student = ['2','93','5','89'];
        console.log(student.sort());
        student.push('99');
        //console.log(student);
        student[0] ='199';
        //console.log(student);
        const keys1 = student.keys();
        //console.log(keys1);
        for(const key of keys1){
            //console.log(key);

        }
        console.log(student.sort());
        const studentAge = [1,45,78,23,25];
        console.log(studentAge.pop());
        console.log(studentAge);
        console.log(studentAge.pop());
        console.log(studentAge);*/
        /*const x = 8;
        const y = 8;
        console.log(x==y);
        console.log(x != y);
        console.log(x !== y);
        console.log(x > y);
        console.log(x < y);*/
        /*let x = 8;
        let y = 5;
        console.log(x+y);
        console.log(x-y);
        console.log(x*y);
        console.log(x%y);
        let z = x++;
        console.log(z);
        console.log(++y);
        const x = 80;
        const y = 80;
        if(x < y){
            console.log('x is less than y');
        }else if( x > y){
            console.log('x is greater than y');
        }else{
            console.log('x is equal to y');
        }*/
        /*const doIHaveBreathingProblem = false;
        const haveILostSmell = true;
        const haveILosttaste = false;
        if(doIHaveBreathingProblem == true){
            if(haveILostSmell == true){
                if(haveILosttaste == true){
                    console.log('Positive');
                }else{
                    console.log('Negative');
                }
                console.log('Positive');
            }else{
                console.log('Negative');
            }
          //console.log('Positive');
        }else{
            console.log('Negative');
        }
        if(doIHaveBreathingProblem || (haveILostSmell && haveILosttaste)){
            console.log('Positive');
        }else{
            console.log('Negative');
        }*/
        //ternary operator
        /*const x = 100;
        const y = 100;
        x < y ? console.log('x is less than y') : (x > y ? console.log('X is greater than y'): console.log('x is equal to y'));*/
        //Switch to case Operator
        /*const dayOfWeek = 2;
        switch(dayOfWeek){
            case 1 :
                console.log('Monday');
                break;
            case 2 :
                console.log('Tuesday');
                break;
            case 3 :
                console.log('Wednseday');
                break;
            case 4 :
                console.log('Thrsday');
                break;
            case 5 :
                console.log('Friday');
                break;
            case 6 :
                console.log('Saturday');
                break;
            case 7 :
                console.log('Sunday');
                break;
        }*/
        // loops in js
        //for loop,while and so while loops
        /*let str = 'String';
        for(let x = 0; x<5; x++){
            str = str + x;
            console.log(x);
            console.log(str);
        }
        let y = 0;
        while(y < 10){
            console.log(y);
            y++;
        }
        let z = 1;
        do{
            z++;
            console.log(z);
        }while(z < 2);*/
        //const students = ['Bala','Rajee','Moksha','Tarun','Meena','Lavanya'];
        //const iterable = [10,20,30];
        /*for(let x = 0; x < students.length; x++){
            //alert('enter into for loop');
            //continue;
            console.log(students[x]);
            continue;
            //if(x===0) break;
        }
        for(let value of iterable){
            value += 1;
            console.log(value);
        }
        for(let value of students){
            value += 's';
            console.log(value);
        }
        //iterating over a map
        const iterable = new Map([
            ["a",1],
            ["b",2],
            ["c",3],
            ["d",4],
        ]);
        for(const entry of iterable){
            console.log(entry);
        }
        for(const [key,value] of iterable){
            console.log(key);
            console.log(value);
        }
        //Iterating over a set
        const iterable = new Set ([1,2,4,2,5,6,5,8,9,4]);
        for(const value of iterable){
            console.log(value);
        }
        const students =[
            {
                name:'Moksha',
                age: 4
            },
            {
                name:'Bala',
                age: 32
            },
            {
                name:'Rajee',
                age: 27
            }
        ];
        console.log(students);
        for(let student of students){
            console.log(student.name);
            console.log(student.age);
        }*/
        /*const students =[
            {
            name:'Bala',
            age: 32,
            isPresent : false,
            },
            {
                name:'Moksha Sree',
                age: 4,
                isPresent : true,
            },
            {
                name:'Rajee',
                age:27,
                isPresent:true
            }
        ];*/
        /*for(let prop in students){
            console.log(`${prop}: ${students[prop]}`);
        }
       students.forEach(student => {
        console.log(student.name);
        console.log(student.age);
       });
       const stuNames = students.map(function(student){
        //return student.name;
        if(student.isPresent){
            return student.name;
        }
       });
       console.log(stuNames);
       const stuAges = students.map(student =>{
        return student.age;
       });
       console.log(stuAges);*/
       /*const class2022 =[
        {
        name:'Bala',
        age: 32,
        isPresent : false,
        },
        {
            name:'Moksha Sree',
            age: 4,
            isPresent : true,
        },
        {
            name:'Rajee',
            age:27,
            isPresent:true
        }
    ];
    const class2021 =[
        {
            name:'Jaya Lakshmi',
            age: 31,
            isPresent : false
        }
    ];
    const students = [...class2022, ...class2021];
    console.log(students);
    const [i, j, k, l] = students;
    console.log(i);
    console.log(j);
    console.log(k);
    console.log(l);*/
    /*const class2022 ={
        name:'Bala',
        age:32
    };
    const class2021 ={
        name:'Jaya Lakshmi',
        age:31
    };
    const Students = {...class2022 }//...class2021 };
    console.log(Students);
    const {name, age} = Students;
    console.log(name);
    console.log(age);
    console.log(JSON.stringify(Students));
    const studentString = JSON.stringify(Students);
    console.log('JSON String',studentString);
    console.log('JSON Parse',JSON.parse(studentString));
    const class2023 =[
        {
        name:'Bala',
        age: 32,
        isPresent : false,
        },
        {
            name:'Moksha Sree',
            age: 4,
            isPresent : true,
        },
        {
            name:'Rajee',
            age:27,
            isPresent:true
        }
    ];
    console.log('Array--:',class2023)
    const class2023String = JSON.stringify(class2023);
    console.log(class2023String);
    console.log('Parse--:',JSON.parse(class2023String));
    const obj = { ...class2023 };
    console.log('object--:',obj);
    const objectAssign = Object.assign({},class2023);
    console.log('objectAssign--:',objectAssign);
    const objForEach = {};
    class2023.forEach((elem,i)=>{
        console.log('elem---:',elem);
        objForEach[i]=elem;
    })*/
    //console.log('objforEach---:',objForEach);
    /*const num = new Set();
    num.add("Bala")
    num.add('Rajee');
    num.add('Moksha');
    num.add('Madhu');
    num.add('Mahesh');
    num.add("Bala")
    console.log(num);
    console.log('Rajee',num.has("Rajee"));
    console.log('lakshmi',num.has("Lakshmi"));
    console.log('Size',num.size());*/
    /*const mySet1 = new Set();
    mySet1.add(1);           
    mySet1.add({"a":2});           
    mySet1.add(5); 
    mySet1.add({"b":4});         
    mySet1.add({"c":3}); 
    console.log(mySet1);
        for (const item of mySet1) {
            console.log('eac'+item);
        }
        for(const item of mySet1.keys()){
            console.log('keys--:'+item);
        }
        for(const item of mySet1.values()){
            console.log('values--:'+item);
        }
        for(const [key,value] of mySet1.entries()){
            console.log('entries keys--:',key);
            console.log('entries values--:',value);
        }/*
        /*const myMap = new Map();
        myMap.set(1,'test');
        myMap.set(2,'Bala');
        myMap.set(3,'Moksha');
        console.log('my map ---:',myMap);
        console.log('get value---:'+myMap.get(3));
        myMap.delete(1);
        myMap.set(4,'Rajee');
        console.log('map values after delete--:',myMap);
        for(const item of myMap.keys()){
            console.log('keys--:',item);
        }
        for(const value of myMap.values()){
            console.log('values---:'+value);
        }
        for(const [key,value] of myMap.entries()){
            console.log('keyssss--:',`${key} = ${value}`);
            console.log('valuessss---:'+value);
        }
        myMap.forEach((value,key) => {
            console.log(`${key} = ${value}`);
        });
        const myArray = [['1', 'array1'],['22','ayyar2']];
        console.log(myArray);
        const myMap1 = new Map(myArray);
        console.log('get array---:'+myMap1.get('22'));
        console.log('Array--:',Array.from(myMap1));
        console.log('Array',[...myMap1]);
        console.log('map---:',myMap1);
        console.log('has---:',myMap1.has('22'));*/
        /*const student = [
            {
                name:'Test',
                fatherName:'Test Father',
                motherName:'Test Mother',
                subjects:[
                    {
                        science:'88',
                        Maths : '75',
                        Telugu : 88,
                    }
                ]
            },
            {
                name:'Test1',
                fatherName:'Test1 Father',
                motherName:'Test1 Mother',
                subjects:[
                    {
                        science:'81',
                        Maths : '73',
                        Telugu : 81,
                    }
                ]
            }
        ];
        console.log('student',student);
        /*for(const value of student){
            console.log(value.name);
            console.log(value.fatherName);
            console.log(value.motherName);
        }*/
        /*student.forEach((value,key) =>{
            console.log('kay--:',key);
            console.log('values---:',value);
            console.log('values---:',value.subjects);
            for(const item of value.subjects){
                console.log('item--:',item.science);
                console.log('item--:',item.Maths);
                console.log('item--:',item.Telugu);

            }

        })*/
        /*const students =[
            {
                name:'Bala',
                age:24
            },
            {
                name:'Moksha',
                age:4
            }
        ];
        console.log(students);
        for(const value of students){
            console.log('name',value.name);
            console.log('Age',value.age);

        }
        students.forEach((value,key) =>{
            console.log('name value',value.name);
            console.log('Age value',value.age);
            console.log('Key',key);
        })
        const mokshaSet = new Set();
        mokshaSet.add('Moksha');
        mokshaSet.add('Bala');
        mokshaSet.add('Rajee');
        mokshaSet.add('Test');
        //mokshaSet.add(1 :'JayaLakshmi');
        console.log(mokshaSet);
        for(const item of mokshaSet){
            console.log('item value--:',item)
        }
        for(const [key,value] of mokshaSet.entries()){
            console.log('keys--:',key);
            console.log('values--:',value);

        }
        const mokshaMap = new Map();
        mokshaMap.set(1,'Bala');
        mokshaMap.set(2,'Raje');
        mokshaMap.set(3,'Moksha');
        mokshaMap.set(4,'Test');
        mokshaMap.set(5,'Test1');
        mokshaMap.set(6,'Bala');
        mokshaMap.set(7,'Raje');
        console.log(mokshaMap);
        //mokshaMap.delete(5);
        console.log('After delete',mokshaMap);
        for(const item of mokshaMap){
            console.log('map value---:',item);
        }
        for(const key of mokshaMap.keys()){
            console.log('key',key);
        }
        for(const [key,value] of mokshaMap.entries()){
            console.log('key=value',`${key}=${value}`);
        }
        for(const value of mokshaMap.values()){
            console.log('values',value);
        }
        const myArry = [];
        const mySet = new Set();
        mokshaMap.forEach((value,key) =>{
            console.log('value for each',value);
            console.log('key for each ',key);
            myArry.push(value);
            mySet.add(value);
            
        })
        console.log('my Array--:',myArry);
        console.log('Set values--:',mySet);*/
        const student = [
            {
                name:'Test',
                fatherName:'Test Father',
                motherName:'Test Mother',
                subjects:[
                    {
                        science:'88',
                        Maths : '75',
                        Telugu : 88,
                    }
                ]
            },
            {
                name:'Test1',
                fatherName:'Test1 Father',
                motherName:'Test1 Mother',
                subjects:[
                    {
                        science:'81',
                        Maths : '73',
                        Telugu : 81,
                    }
                ]
            }
        ];
        console.log('student',student);
        /*for(const value of student){
            console.log(value.name);
            console.log(value.fatherName);
            console.log(value.motherName);
        }
        student.forEach((value,key) =>{
            console.log('kay--:',key);
            console.log('values---:',value);
            console.log('values---:',value.subjects);
            for(const item of value.subjects){
                console.log('item science--:',item.science);
                console.log('item maths--:',item.Maths);
                console.log('item telugu--:',item.Telugu);

            }

        })*/
        const gbStudents =
        {
            "student": {
              "name": "bala",
              "age": "33",
              "subjects": [
                {
                  "science": "81",
                  "Maths": "Cell content that is very long. It also has a line break. It has more than one line break",
                  "Telugu": "73"
                },
                {
                    "science": "85",
                    "Maths": "Cell content that is very long. It also has a line break. It has more than one line break",
                    "Telugu": "73"
                },
                {
                    "science": "86",
                    "Maths": "Cell content that is very long. It also has a line break. It has more than one line break",
                    "Telugu": "73"
                },
              ]
            }
          }
        const obj = JSON.parse('{"student":{"name":"bala","age":"33","subjects":[{"science":81,"Maths":"Cell content that is very long. It also has a line break. It has more than one line break","Telugu":"73","counrty":"FR"},{"science":82,"Maths":"Cell content that is very long. It also has a line break. It has more than one line break","Telugu":"73","counrty":"US"},{"science":82,"Maths":"Cell content that is very long. It also has a line break. It has more than one line break","Telugu":"73","counrty":"FR"}]}}');
        console.log('obj ---:',obj);
        console.log('obj subjects---:',obj.student.subjects);
        this.data = obj.student.subjects;
        console.log('subjects length ---:',obj.student.subjects.length);
        for(const item of obj.student.subjects){
            this.totalscienceMarks += parseInt(item.science);
            this.totalMathsMarks += parseInt(item.Maths);
            this.totalTeluguMarks += parseInt(item.Telugu);
            console.log('totalscienceMarks ---:',this.totalscienceMarks);
            let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
            console.log('country name',regionNames.of(item.counrty));  // "United States"
            item.counrty = regionNames.of(item.counrty);
            this.studentsData.push(item);
            console.log('each item--:',this.studentsData.science);
            let milliseconds = 2302345654324; // epoch date
            let date = new Date(milliseconds);
            console.log('date',date);
            let milliseconds1 = 1348755654324;
            let myDate = new Date( milliseconds1);
            // using various methods of Date class to get year, date, month, hours, minutes, and seconds.
            let dateStr = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate() /*+ " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds()*/;
            console.log('dateStr',dateStr);
        }
        /*obj.student.subjects.forEach(each => {
            console.log('country name',each.counrty);
            let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
            console.log('country name',regionNames.of(each.counrty));  // "United States"
            each.counrty = regionNames.of(each.counrty);
            this.studentsData.push(each);
            //console.log('each item--:',this.studentsData[each].science);
            
        });*/

    }
}