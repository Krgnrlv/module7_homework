class ElectronicalAppliances{
    constructor (name){
        this.name=name,
        this.status=true
    }
    power(){
        if (this.status == false){
            return true;
        }else{
            return false;
        }
    }
    getStatus(getStatus){
        this.getStatus = getStatus;
        console.log(`${this.name} -> ${this.getStatus}`);
    };
};
class MyDevices extends ElectronicalAppliances{
    constructor (name,color,brand,energy){
    super(name),
    this.color=color,
    this.brand=brand,
    this.energy=energy
    }
};
const tv =new MyDevices("tv","black","samsung",300);
tv.getStatus('turn off');
tv.power;
const computer=new MyDevices("computer","grey","apple",80);
computer.getStatus('turn on');
computer.power;
const tableLamp=new MyDevices("Table lamp","white","xiomi",10);
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