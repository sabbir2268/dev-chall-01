const dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    weight: 60,
    bark: function() {
      return "Woof!";
    },
    color: "white",
    age: 5
}
document.querySelector(".info").innerHTML = dog.name + " is a " + dog.breed + " dog weighing " + dog.weight + " pounds.";
document.querySelector(".bark").innerHTML = dog.bark();

const person3 = {
    f_name : "Rehan",
    age : 25,
    occupation : "Software Engineer",
    city : "Karachi",
}

let text = "";
for(let x in person3){
    text = text + person3[x]+ " ";
}
document.querySelector(".massage").innerHTML = text;

const person4 = {
    First_name : "akash",
    Age : 28,
    Occupation : "architecture Engineer",
    City : "dhaka",
}
//showing valus of object through array
const myarray = Object.values(person4);
document.querySelector(".massage2").innerHTML = myarray;

//showing valus of object through Loop
let text2 = "";
for(let [attribute,value] of Object.entries(person4)){
    text2 = text2+ attribute + " : " + value + "<br>";
}

document.querySelector(".massage3").innerHTML = text2;

var headings = document.querySelectorAll('h1'); 
headings.forEach(function(heading) { 
    heading.style.color = "seaGreen"; 
});


//showing valus of object as string
let myString = JSON.stringify(person4);
document.querySelector(".massage4").innerHTML = myString;

// object Constructor function
function Parents(f_name,l_name, age, weeight, address, city){
    this.f_name = f_name;
    this.l_name = l_name;
    this.age = age;
    this.weeight = weeight;
    this.address = address;
    this.city = city;
    this.fullName = function(){
        return this.f_name + " " + this.l_name;
    }
}

//addint method to an constrator function
myMother.changeName = function(name){
    this.f_name = name;
}

const myFather = new Parents("Aitullah", 55, 70, "Gulshan", "dhaka");
const myMother = new Parents("Champa Begum", 50, 60, "Gulshan", "dhaka");

Parents.nationality = "Bangladeshi"//adding new property to the function constructor.
myFather.nationality = "Bangladeshi"//adding new property to the father objects.

document.querySelector(".myFather").innerHTML = myFather.name + " is " + myFather.age + " years old" + " "+ myFather.nationality;

document.querySelector(".myMother").innerHTML = myMother.name + " is " + myMother.age + " years old.";

