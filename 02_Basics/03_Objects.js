// TYPES OF OBJECTS IN JAVASCRIPT
/* 
    1. One is LITERAL 
    2. Second is CONSTRUCTOR =.     Object.create
    3. Singleton Object ... 
*/


// 1. Literal Object
 const mySym = Symbol("Key1");

    const Jsuser  = {
        name : "Zaid",
        [mySym] : "myKey1",
        age : 22,
        location : "Mumbai",
        email : "Zaid@gmail.com",
        isloggedin : true,
        lastlogindays : ["Monday", "Saturday"]
        }
//console.log(typeof Jsuser.age);

/* console.log(Jsuser.name);
console.log(Jsuser[mySym]);
console.log(Jsuser.age);
console.log(Jsuser.location);
console.log(Jsuser.email);
console.log(Jsuser.isloggedin);
console.log(Jsuser.lastlogindays);
 */
//console.log(Jsuser[mySym]);

/*  ********************* Object Freeeze ***************************** */
Jsuser.email = "Shaikhzaid@mail.com";
// console.log(Jsuser.email);
//Object.freeze(Jsuser); // this will help us to not overwrite the Jsuser.emial value ... so the mail will remain same as 
Jsuser.email = "spammail.com"; // will not work because of freeze
//console.log(Jsuser.email);

Jsuser.greeting = function(){
    console.log("hello zaid");  
}
Jsuser.greetingTwo = function(){
console.log(`hello Jsuser ${this.name}`);  
}
console.log(Jsuser.greeting()); // this will print "[Function (anonymous)]" becoz yeh function returnback ... function call nhi hua hai
console.log(Jsuser.greetingTwo()); // this will print "[Function (anonymous)]" becoz yeh function returnback ... function call nhi hua hai


