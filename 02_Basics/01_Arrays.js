let myarr = [0, 1, 2, 3, 4, 5]; // Can name anything to array 
//console.log(myarr); // JS are Resizable and can hold multiple data types 

/* ************************************************************************************************************************ */
/* types we can create a ARRAY */

const newArr = new Array ();
const myarr2 = [7,8,9,10];
const heros = ['shaktiman', 'naagraj', 'doga', 'batman'];
//console.log(heros[1]);




/* **********************************ARRAY METHODS*********************************************************************** */

/* myarr2.push(13);
myarr2.push(11);
myarr2.push(12); */

//myarr.unshift(12);
myarr.unshift();
myarr.unshift();
//console.log(myarr);


/* console.log(myarr.includes(3)); // returns boolean value if present or not
console.log(myarr.includes(8)); // returns boolean value if present or not

console.log(myarr.indexOf(2)); // it shows the index of element (jaise myarr mai 2 ka index 1 hai)
console.log(myarr.indexOf(0)); // it shows the index of element (jaise myarr mai 2 ka index 1 hai)
 */

const newZaid = myarr.join(); // it joins the array elements with given separator
/* console.log(newZaid);
console.log(myarr);
 */


/* ********************************SLICE AND SPLICE******************** */
//console.log("SLICE");

console.log("A", myarr);
const myn1 = myarr.slice(1,3); // the starting point is 0 so it will start running from index 0 and will go till 5 and it will not include 5th index element
console.log(myn1);
console.log("B", myarr);

console.log("SPLICE");
const myn2 = myarr.splice(1, 3); // 
console.log("C", myarr);
console.log(myn2); 