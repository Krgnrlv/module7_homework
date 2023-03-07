const keysAndOwnProp=(testObj)=>{
    for (let key in testObj){
        if (testObj.hasOwnProperty(key)) {
            console.log('Ключь ->',key,'Свойства->',testObj[key]);
        } ;
    };
};
const person={
    age:16,
    ownSurname:'Generalova',
    ownName:'Kira',
}
keysAndOwnProp(person)
