const propInObj=(str,testObj)=>{
    console.log(str in testObj);
};
const person={
    age: 16,
    ownSurname:'Generalova',
    ownName:'Kira',
}
propInObj('age',person)