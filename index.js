// Iteration 1: Names and Input
let hacker1 = "Victor"
console.log("The driver's name is " + hacker1);
let hacker2 = "Raafat"
console.log("The navigator's name is " + hacker2);




// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length)
   
}
else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length)

}
else {
    console.log("Wow, you both have equally long names " + hacker1.length);
}

// Iteration 3: Loops
//for (let i = 0; i < hacker1.length; i++) {
    //const element = (hacker1[i] + " ");
    //let result += element;
    //console.log(result);
 
//}
const hacker1toUpperCase = hacker1.toUpperCase()
console.log(hacker1toUpperCase);
let result = ""
for (let i = 0; i < hacker1toUpperCase.length; i++) {
    let seperatedLetter = (hacker1toUpperCase[i] + " ");
    result += seperatedLetter
}
console.log(result)

let element = ""
for (let j = hacker2.length -1 ; j >= 0 ; j --) {
    element += hacker2[j]

}
console.log(element)

let firstLetterHacker1 = hacker1[0];
console.log(firstLetterHacker1);
let firstLetterHacker2 = hacker2[0]
console.log(firstLetterHacker2);
if (firstLetterHacker1 > firstLetterHacker2) {
    console.log(hacker1 + " goes first.")
    
}
else if (firstLetterHacker2 >firstLetterHacker1 ) {
    console.log("Yo, " + hacker2 + " goes first, definitely.")
}
else {
    console.log("What?! You both have the same name?")
}




if (hacker1.toUpperCase() > hacker2.toUpperCase()) {
    console.log(hacker1 + " goes first.")
    
}
else if (hacker2.toUpperCase() >hacker1.toUpperCase()) {
    console.log("Yo, " + hacker2 + " goes first, definitely.")
}
else {
    console.log("What?! You both have the same name?")
}

    
let Longtext = `
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

`


let count = 3
for (let k = 0; k < Longtext.length; k++) {
    const element = Longtext[k];
if (element === " ") {  
   count++ ;  
}
}
console.log(count);

let counter = 0;
 
for (let l = 0; l < Longtext.length; l++) {
  const twoChars = Longtext[l] + Longtext[l + 1];
  
  if ( twoChars === "et" ) {
    counter++;
  }
}
console.log(counter);
