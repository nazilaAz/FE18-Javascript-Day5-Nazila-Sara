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

document.getElementById("container").innerHTML +=
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

class Animal {}

class Car {}