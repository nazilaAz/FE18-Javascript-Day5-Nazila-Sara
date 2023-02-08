//3 Objects for Car
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

document.getElementById("container").innerHTML +=
    `
<div class="card mt-2" style="width: 18rem;">
    <div class="card-body">
                <p class="card-text">Some quick <mark> ${oCar1.cBrand} </mark> example text to <mark> ${oCar2.carModel()} </mark> title and make up the bulk of the card's <mark> ${oCar3.carColor()} </mark>.
                </p>
    </div>
</div>
`;

// 3 Objects for Animals
const oAnimal1 = {
    aName: "cat",
    aColor: "gray",
    animalName: function() {
        return `This is a ${this.aName} and the color is ${this.aColor}`;
    }
};

console.log(oAnimal1.animalName());


const oAnimal2 = {
    aSpeed: "20",
    animalSpeed: function() {
        return `The ${oAnimal1.aName} has ${this.aSpeed}`;
    }
};
console.log(oAnimal2.animalSpeed());


const oAnimal3 = {
    aLegs: "4",
    animalLegs: function() {
        return `The ${oAnimal1.aName} has ${this.aLegs}`;
    }
};
console.log(oAnimal3.animalLegs());

document.getElementById("container").innerHTML +=
    `
<div class="card mt-2" style="width: 18rem;">
    <div class="card-body">
                <p class="card-text">Some quick <mark> ${oAnimal1.aName} </mark> example text to <mark> ${oAnimal2.animalSpeed()} </mark> title and make up the bulk of the card's <mark> ${oAnimal3.aLegs} </mark>.
                </p>
    </div>
</div>
`;

//3 Objects for Person
const oPerson1 = {
    pName: "Hannah",
    pFamily: "Lutz",
    personInfo: function() {
        return `${this.pName} has a ${oAnimal1.aName}. Her ${oAnimal1.aName}
        is ${oAnimal1.aColor} and has ${oAnimal3.aLegs} Legs.`;
    }
};

console.log(oPerson1.personInfo());

const oPerson2 = {
    pAge: "25"
};
const oPerson3 = {
    pWeight: "45Kg"
};
document.getElementById("container").innerHTML +=
    `
<div class="card mt-2" style="width: 18rem;">
    <div class="card-body">
                <p class="card-text">Some quick <mark> ${oPerson1.pName}  ${oPerson1.pFamily}</mark> example text to <mark> ${oPerson2.pAge} </mark> title and make up the bulk of the card's <mark> ${oPerson3.pWeight} </mark>.
                </p>
    </div>
</div>
`;