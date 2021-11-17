// JS Challenge #3

// Defining class
class Car {
    constructor(make,model,turnedOn, engineDisplacement, year) {
    this.make = String(make);
    this.model = String(model);
    this.turnedOn = Boolean;
    this.engineDisplacement = engineDisplacement;
    this.year = year;
    }

    isOn(){
        return this.turnedOn;
    };      

    turnOn(){        
        this.turnedOn = true;
    };

    turnOff() {
        this.turnedOn = false;
    };

    toString(){     
        return 'toString: ' + this.year + ' ' + this.make + ' ' + this.model + ' ' + this.engineDisplacement;
    };

    getMarketingData(){
        return 'getMarketingData-> MAKE: ' + this.make + ' | MODEL: ' + this.model + ' | YEAR: ' + this.year;
    };
};

//Instantiation
var car1 = new Car("Ford", "Fiesta", false, 200, 2011);

function challenge3(){
//Printing to console w/ methods
    car1.turnOn();
    console.log(car1);
    console.log(car1.toString());
    console.log(car1.getMarketingData());
}



// JS Challenge #4
function challenge4(){

class Bicycle extends Car {
    constructor(make,model,year) {    
        super(Car);
        this.make = String(make);
        this.model = String(model);
        this.year = year;        
    }
}

var bike1 = new Bicycle('Shimano', 'Pro', 2021);
console.log(bike1.getMarketingData());
}