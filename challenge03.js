const person = {
    fullName: "",
    mass: "",
    height: "",
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const mark = Object.create(person);
const john = Object.create(person);

mark.fullName = "Mark Miller";
mark.mass = 78;
mark.height = 1.69;

john.fullName = "John Smith";
john.mass = 92;
john.height = 1.95;

if (mark.calcBMI () > john.calcBMI ()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}



