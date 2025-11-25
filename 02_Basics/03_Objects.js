// TYPES OF OBJECTS IN JAVASCRIPT
/* 
    1. One is LITERAL 
    2. Second is CONSTRUCTOR =.     Object.create
    3. Singleton Object ... 
*/


// 1. Literal Object
    
    const Jsuser  = {
        name : "Zaid",
        mySym : "myKey1",
        age : 22,
        location : "Mumbai",
        email : "Zaid@gmail.com",
        isloggedin : true,
        lastlogindays : ["Monday", "Saturday"]
           }

           console.log(Jsuser.email)
           console.log(Jsuser["email"]);


const mySym = Symbol("Key1")
           console.log(Jsuser.mySym           );
           
