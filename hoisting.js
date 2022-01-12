// console.log("Q1");
// console.log(hello);
// var hello = 'world';

//var hello;
//console.log(hello);
//var hello = 'world';
//Terminal will show undefined



// console.log("Q2");
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

//var needle;
//function test(){
    //var needle;
    // var needle = 'magnet';
    // console.log(needle);
//}
//needle = 'haystack';
//test();
//Terminal will show 'magnet', function scope 



// console.log("Q3");
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// var brendan;
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool'
// console.log(brendan);
//Terminal will show 'super cool' because print() is not called



// console.log("Q4");
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// var food;
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';

// }
// food = 'chicken';
// console.log(food);
// eat();
//Terminal will show 'chicken' 'half-chicken'

// console.log("Q5");
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//var mean;
//mean = function(){
//     var food;
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
//mean();
// console.log(food);
// console.log(food);
//Terminal will say 'chicken' 'fish' 'undefined' 'undefined'
//Oops I didn't catch that mean wasn't properly set up with an arrow


// console.log("Q6");
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// var genre;
// function rewind(){
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// var genre = "disco";
// rewind();
// console.log(genre);
//Terminal will say 'undefined' 'rock' 'r&b' 'disco'



// console.log("Q7");
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// var dojo;
// function learn(){
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);
//Terminal will say 'san jose' 'seattle' 'burbank' 'san jose'


// console.log("Q8");
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// function makeDojo(name, students){
//     const dojo;
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// Terminal will say 
//     {
//         name: 'Chicago';
//         students: '65';
//         hiring: true;
//     }
//     {
//         "closed for now"
//     }
//I should have known that "closed for now" couldn't be assigned as the whole object