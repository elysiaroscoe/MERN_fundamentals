// console.log("P1")
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Variable randomCar is assigned as cars[0], and otherRandomCar is cars[1]... they aren't random though. 'Tesla' 'Mercedes'
// console.log(randomCar)
// console.log(otherRandomCar)

// console.log("P2")
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //name doesn't exist, it is stored as otherName, so error. otherName would be 'Elon'
// console.log(name);
// console.log(otherName);


// console.log("P3")
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //password is '12345' and hashedPassword would be person.password but that is undefined
// console.log(password);
// console.log(hashedPassword);



// console.log("P4")
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //first is 2 and second is 5 and third is 2. 'false' 'true'
// console.log(first == second);
// console.log(first == third);



// console.log("P5")
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //key is lastTest.key which is 'value'
// //secondKey is lastTest.secondKey which is [1, 5, 1, 8, 3, 3]
// //secondKey[0] is 1
// //willThisWork is secondKey[1] which is 5 and I believe it will work
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);


