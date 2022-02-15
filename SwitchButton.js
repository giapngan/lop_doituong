class ElectriLamp {
    setStatus(status) {
        this.status = status;
    }
    turnOn() {
        if (this.status) {
            alert("Lingt On")
        }
    }
    turnOff() {
        if (this.status == false) {
            alert("Lingt Off")
         }
     }
 }           
 class SwitchButton {
     constructor(s,l) {
         this.status = s;
         this.lamp = l;
     }
     connectToLamp(ElectriLamp) {
         this.lamp = ElectricLamp;
     }

     switchOff() {
         this.status = false;
         this.lamp.setStatus(false);
         this.lamp.turnOff();
     }
     switchOn() {
         this.status = true;
         this.lamp.setStatus(true);
         this.lamp.turnOn();
     } 
 }          
 let lamp1 = new ElectriLamp();
 lamp1.setStatus(true);
 lamp1.turnOn();

 let switch1 = new SwitchButton(true,lamp1);
 switch1.switchOff();