const tinderuser = {}
    tinderuser.id = "123abc",
    tinderuser.name = 12,
    tinderuser.isloggedin = false



const regularUser = { // 1st object 
    email : "zaid163@yahoo.com",
    fullname : { //2nd object inside there 1st object 
        userfullname : { // 3rd object inside 2nd object inside 1st object
            firstname : "Zaid",
            lastname : "Shaikh"
        }
    }

}
//console.log(regularUser.fullname.userfullname);

const obj1 = {a:1 , b:2};
const obj2 = {a:3 , b:4};
const obj3 = {a:5 , b:6};
const obj4 = Object.assign ({}, obj1, obj2);
//console.log(obj4);

const obj5 = {...obj1, ...obj2,};
///console.log(obj5);


const users = [
    {   
        id : 1,
        mail : "z@gmail.com",
    },  

    {   
        id : 2,
        mail : "z@gmail.com",
    },
]
    users[1].email
    //console.log(tinderuser);

/* console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser)); */

console.log(tinderuser.hasOwnProperty('isloggedin'));

const course = {
    coursename : "Node.js",
    price : 999,
    courseInstructor : "Zaid Shaikh"
}