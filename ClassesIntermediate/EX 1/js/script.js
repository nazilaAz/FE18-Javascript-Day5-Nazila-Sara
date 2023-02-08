class Person {
    pName;
    pFamily;
    pAge;
    pWeight;

    constructor(firstName, lastName, age, personweight) {
        this.pName = firstName;
        this.pFamily = lastName;
        this.pAge = age;
        this.pWeight = personweight;
    }

    personInfos() {
        return ` ${this.pName} ${this.pFamily} has 2 Links to Access his/her Pet and Car. `;
    }
}

const psample1 = new Person("Hannah", "Puzt", 25, "45");

document.getElementById("firstcol").innerHTML +=
    `
<div class="card" style="width: 18rem;">
<img src="img/Pic.png" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${psample1.pName} ${psample1.pFamily} - ${psample1.pAge}</h5>
<h6 class="card-subtitle mb-2 text-muted">(${psample1.pWeight}) Kg </h6>
<p class="card-text">${psample1.personInfos()}</p>
<a href="#" class="card-link">Her/ His Pet</a>
<a href="#" class="card-link">Her / His Car</a>
</div>
</div> 
`;

class Animal {
    aName;
    aColor;
    aSpeed;
    aLegs;

    constructor(animalName, animalColor, animalSpeed, animalLeg) {
        this.aName = animalName;
        this.aColor = animalColor;
        this.aSpeed = animalSpeed;
        this.aLegs = animalLeg;
    }
    animalInfos() {
        return ` The ${this.aName} is ${this.aColor}, can ${this.aSpeed} speed and has ${this.aLegs} legs. `;
    }
}
const sampleAnimal = new Animal("Horse", "Black", "60km", 4);

document.getElementById("secondcol").innerHTML +=
    `
<div class="card" style="width: 18rem;">
<img src="img/Pic.png" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${sampleAnimal.aName} -  ${sampleAnimal.aLegs}</h5>
<h6 class="card-subtitle mb-2 text-muted">(${sampleAnimal.aColor})</h6>
<p class="card-text">${sampleAnimal.animalInfos()}</p>
<a href="#" class="card-link">Her/ His Information</a>
<a href="#" class="card-link">Her / His Car</a>
</div>
</div> 
`;

class Car {}