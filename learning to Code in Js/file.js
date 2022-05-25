//alert('hello world')

//console.log('hello broer')

//console.log('this is an error')
//console.log('this is a warning')

//var-is outdated now its let and const

//let age = 26;
//age = 27;
//console.log(age);
// let score
//let score;

//score = 26;

//console.log(score);


// strings, numbers, boolean, null , undefined 

//const name = 'Basil';
//const age = 40 ;
//const rating = 4.5;
//const isAwesome = true;
//const x = null;
//const y = undefined;
//let z; 
//console.log(typeof name); is a string
//console.log(typeof age); is a number
//console.log(typeof rating); is a number
//console.log(typeof isAwesome); is boolean 
//console.log(typeof x); is an object
//console.log(typeof y); is undefined
//console.log(typeof z); is undefined

//Concatenation
//console.log('My name is '+ name +' and i am ' + age);
//template string
//console.log(`My name is ${name} and i am ${age}`);
//const s = 'hello World!';

//console.log(s.lenght);

//functions as first-hand class objects

//using jQuery
 // $.get("some/url", someData, function(result, status){
    // check status, and do something 
    // with the result
//});

//Recursion for algorithms and solving large classes of problems 
    //function fact (n) {
        // if (n === 0){
            //return 1;

    //} else {
        //return n * fact(n-1);
        //}
 //   }
 


 //JavaScipt functions are invoked when a button is clicked/ or an event is called 

// function clickFunction() {
 //  document.getElementById("testing").innerHTML = 5 + 9
 //}


 // Js output/dispay possibilities
 //.js can display data in different ways:
 //Writting into an HTML element, using .innerHTML .
 //Writting into the HTML output using document.wtite() . 
 //writting into the browser console, using console.log() .


 //Usuing .innerHTML to access an html element,Js can use the document.getElementById("id") method .

    
    //   document.getElementById("testing").innerHTML = 'this is how to write from a .innerhtml property and document.getelementbyid method to access an html element from js';
    //var name is a global varable

    //let is local in functions and objects
      //      function myButton(){
         //       let x = document.getElementById("testing");
           //     x.style.fontSize = "7rem";
             //   x.style.color = "orange";
           // }

         //   function displayAge(){
          //      let age = 45;
           //     document.getElementById("testing").innerHTML = 45 ;
           // }



        //    function displayGender(){
        //        let Gender = 'male';
        //      document.getElementById("testing")
           // }

          //  let lastname, lastName;
          

         // function vote (age){
           
          //  if(age >=16){
           //     console.log("you can vote")
            //    document.getElementById("age").innerHTML = "You can vote";
           // }
         //   else 
          //  if(age <=16){
            //    console.log("you can not vote");
           
           //     document.getElementById("age").innerHTML = "You can't vote";
          //  }


         // }
      

        //  vote(16)

//   let add = document.getElementById("myFuntion");
//    let remove = document.getElementById("myFuntion1");

  // let int = document.getElementById("number");
  // let interger = 0;

   //add.addEventListener('onclick', myFunction(){
 //    integer +=1 ;
   //  int.innerHTML = interger;
      
//    })

  //  remove.addEventListener('onclick', myFunction1(){
  //   integer -=1 ;
   //  int.innerHTML = interger;
      
  // });
  let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};
