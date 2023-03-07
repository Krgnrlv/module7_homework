function electronicalAppliances(name){
    this.name=name,
    this.status=true
};
electronicalAppliances.prototype.power=function(){
    if (this.status == false){
        return true;
    }else{
        return false;
    }
};
electronicalAppliances.prototype.getStatus = function(getStatus){
    this.getStatus = getStatus;
    console.log(`${this.name} -> ${this.getStatus}`);
};
function myDevices(name,color,brand,energy){
    this.name=name,
    this.color=color,
    this.brand=brand,
    this.energy=energy
};
myDevices.prototype =Object.create(electronicalAppliances.prototype);
myDevices.prototype.constructor = myDevices;
const tv=new myDevices("tv","black","samsung",300);
tv.getStatus('turn off');
tv.power;
const computer=new myDevices("computer","grey","apple",80);
computer.getStatus('turn on');
computer.power;
const tableLamp=new myDevices("Table lamp","white","xiomi",10);
tableLamp.getStatus('turn on');
tableLamp.power;
function SumElectricalAppliancesPower(first, second){
    let energyFirst = first.energy;
    let energySecond = second.energy;
    if(first.status === false){
        energyFirst = 0;
    };
    if(second.status === false){
        energySecond = 0;
    };
    console.log('Total energy consuption -> '+(energyFirst + energySecond));
  }
SumElectricalAppliancesPower(tableLamp, computer);