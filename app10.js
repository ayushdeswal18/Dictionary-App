const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("result");
const sound=document.getElementById("sound");
const btn=document.getElementById("button1");
const btn2=document.getElementById("button2");
const h1=document.getElementById("heading");
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");
const mean=document.getElementById("meaning");
const example=document.getElementById("example");
btn.addEventListener("click",()=>{
 

let inword=document.getElementById("input").value;

fetch(`${url}${inword}`).then((response)=>response.json()).then((data)=>{
    console.log(data)
  h1.innerHTML=inword;
  p1.innerHTML=data[0].meanings[0].partOfSpeech;
  p2.innerHTML=data[0].phonetic;
mean.innerHTML=data[0].meanings[0].definitions[0].definition;
example.innerHTML=data[0].meanings[0].definitions[0].example;


})
});
//btn2.addEventListener("click",()=>{
   
   // fetch(`${url}`).then((response)=>response.json()=>{
   
  // sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`);
  //sound.play();
  //  })
//})//



