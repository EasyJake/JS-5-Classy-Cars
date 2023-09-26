// Base class: Vehicle
class Vehicle {
    constructor(model) {
        this.model = model;
    }

    drive() {
        return this.model + " drives";
    }
}

// Derived class: Sedan
class Sedan extends Vehicle {
    constructor(model, backupCamera) {
        super(model);
        this.backupCamera = backupCamera;
    }
}

// Derived class: SUV
class Suv extends Vehicle {
    constructor(model, offroadPackage) {
        super(model);
        this.offroadPackage = offroadPackage;
    }
}

// Derived class: Truck
class Truck extends Vehicle {
    constructor(model, towingCapacity) {
        super(model);
        this.towingCapacity = towingCapacity;
    }
}

// Derived class 2: EVSedan
class EVSedan extends Sedan {
    constructor(model, backupCamera) {
        super(model, backupCamera);
    }

    recharge() {
        return this.model + " recharges";
    }
}

// rem