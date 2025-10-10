// Function


// The function is here can help us to reuse the code and to avoid the cluster 
// we can just write myFunction to print the Hello World as many time we want.

function myFunction() {        
 //console.log("Hello World"); 
}                               
myFunction();
myFunction();

let name = "Zaid"; 

function newFunction() {
  //console.log(`Hello, ${name}!`)
}
newFunction();


// *******************************************************************

// Now we will leabr about STACK and HEAP memory

// Stack memory => Primitive data types (yeh ek copy banata hai)
// Heap memory => Non-primitive data types (yeh reference banata hai)

let myYoutubename = 'zaidi'; // stack memory

let anothername = myYoutubename

anothername = 'codewithzaidii'

// console.log(myYoutubename);
// console.log(anothername);


// *******************************************************************

// Now we will learn about Heap memory

let userOne = {
  email:'zaid123@gmaiol.com'
  }
let userTwo = userOne; // here we are creating the reference of userOne in userTwo

userTwo.email = 'zaidiiiiii@gmail.com'
console.log(userOne);
console.log(userTwo);

// Output : zaidiiiiii@gmail.com .... because rasta to dono ka same hi hai 

// Stack memory => Primitive data types (yeh ek copy banata hai)
// Heap memory => Non-primitive data types (yeh reference banata hai)