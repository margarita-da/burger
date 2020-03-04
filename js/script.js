var name='Маргарита';
console.log(name);
name='Женя';
console.log(name);

if (name=='Маргарита') {
    console.log(name);
} else if (name=='Женя') {
    console.log('а');
}
else {
    console.log(false);
}

for (var a=1; a<=10; a++) {
    console.log(a);
}

function sum(p1,p2,p3) {
 let result= p1+p2+p3;
 return result;
}

let variable=sum(10,20,30);
console.log(variable);

let value=sum(1,2,3);
console.log(value);

let array=new Array ();

let arr= [];

let ar= ['привет', 'loftschool'];
ar.push('я изучаю', 'javascript');
console.log(ar.length);
for (let i=0; i<ar.length;i++) {
    console.log(ar[i]);
}

let map= [10,20,30,40,50,190,140,400,9,6000];
for (let i=0; i<map.length; i++) {
    if (map[i]>100) {
        console.log (map[i]);
    }
}

let obj= {
    name:'Маргарита',
    lastName:'Дорохова',
    age:'29'
}
console.log(obj.name);
console.log(obj.lastName);
console.log(obj.age);

function hello(human) {
//    return 'Привет, меня зовут '+ human.name +' ' + human.lastName + ' и мне ' +human.age +' лет!';
    return `Привет, меня зовут ${human.name} ${human.lastName} и мне ${human.age} лет!`
}
   
let res=hello(obj);
console.log(res);