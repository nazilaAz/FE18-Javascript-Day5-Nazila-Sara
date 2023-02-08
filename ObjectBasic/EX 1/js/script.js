//3 Object for Car
const oCar1 = {
    cBrand: "Audi",
    carBrand: function() {

        return `The Brand of Car is ${this.cBrand}`;
    }

};
console.log(oCar1.carBrand());

const oCar2 = {
    cModel: "A6",
    carModel: function() {
        return `The Model of Car is ${this.cModel}`;
    }
};

console.log(oCar2.carModel());

const oCar3 = {
    cColor: "Gray",
    carColor: function() {
        return `The Color of Car is ${this.cColor}`;
    }
};
console.log(oCar3.carColor());


// 3 Objects for Animals
const oAnimal1 = {
    aName: "cat",
    aColor: "gray"

}
const oAnimal2 = {
    aSpeed: "20"
}
const oAnimal3 = {
    aLegs: "4"
}

//3 Objects for Person
const oPerson1 = {
    pName: "Hannah",
    pFamily: "Studeny"
}
const oPerson2 = {
    pAge: "25"
}
const oPerson3 = {
    pWeight: "45"
}