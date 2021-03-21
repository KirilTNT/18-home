/* 
 

  if (   object1 != object2 ) {
    object1.forEach(Element > object2);
        
    
    
  
    }
  
  console.log("різні");  
  
    const object = {
  key1 :"Mersedes  speed111" ,
  key2 :"BMW  speed123",
  key3 :"Porshe  speed222"


 }
 function toString(object) {
 let string = "";
 const keys = Object.keys(object)

 keys.forEach(( value ,index) => {
 string = string + value + "=" + object[value] + " "   
 })
console.log(string)

 }

 toString(object)
 

const object2 = {

    key1: "value1",
}


const object1 = {

    key1: "value1",
}
function CompareToObjects  (object1 , object2){
 const keys1 = Object.keys(object1)
 const keys2 = Object.keys(object2)


 let equels =  true;

 if (keys1.length == keys2.length)
 {
 keys1.forEach(element =>  {          
     if (object1 [element] !=  object2 [element] ) {
         equels =false;
     }

 });
 return equels
 } 
return false

}
 console.log(CompareToObjects(object2 , object1))
  

const string =  "Anna"
 function greetings ( string)  {

return(  "Gree" +  " " + string)
 } 
 console.log(greetings(string))

 
const a =40

const b =39
 function de (a,b) {
 if ( a > b ) {
 return (a + ">" + b)



 }
else if (a == b) {

    return (a + "=" + b)
} 
 else{
return(a + "<" + b)



 }


 }
 console.log(de(a,b))
const  ad = {
 name: "Kip",
 age: 21



}
const  ed = {
    name: "Kip",
    age: 21
   
   
   
   }
 console.log(ed.name == ad.name) 



   const arr = [ 12,23,56,4656,7,78,67,867,8,]


 console.log(arr[3])
  for (let i = 0 ; i < 5 ; i= i + 100)   {
console.log(i)


 } 
 */
 
//  const arr1 = [ ]

//  function length (arr2)  {
//    if(arr1.length == 1 ) {
//  console.log("занато мало*")

//    }
//    else if (arr1.length == 0) {
//  console.log("має бути позитивне")



//    }
//    else {
   
//     console.log("Довжина масив" + arr1.length) 

//    arr2.forEach ( 
//   (value,index) => {
//    console.log(" Під індексом   " + index + "знаходиться" + value)
// });


//    }

//  }
// length(arr1)
//  function drawToConsole (height) {
//    for (let i = 1; i <= height; i++) {
//        let resaut = "";
//        for (let  f= i;  f< height; f++) {
//          resaut = resaut + " "
         
//        }
//      for (let j = 0; j < (2*i-1); j++) {
       
//       resaut = resaut + "*"
//      }
//      console.log(resaut)
//    }



  
//  } 

//  drawToConsole(9)



function cratetoDOItem() {
  
  const firstText = document.getElementById(first).value

  const secondText = document.getElementById(second).value
   
  
  const todoContainer = document.getElementById("to-do-container") 


  const todoItemWrapper = document.createElement("div")


  const todoStatus = document.createElement("input")
  todoStatus.type = "checkbox"

  const todoItemTitel = document.createElement("h3")
  todoItemTitel.innerText = firstText


  const todoItemdescription = document.createElement("p")
  todoItemdescription.innerText = secondText

  todoItemWrapper.append(todoItemTitel, todoItemdescription)
  
  todoContainer.appendChild(todoItemWrapper)
 
}





















































































































































































































































































































