document.addEventListener("DOMContentLoaded",function(){
    var button1=document.querySelector(".button1");
    var button2=document.querySelector(".button2");
    var button3=document.querySelector(".button3");
    button1.onclick=function(){
    var skills = document.querySelector(".skills");
    var education= document.querySelector(".education");
    var experience= document.querySelector(".experience");
    education.style.display="none";
    experience.style.display ="none"
    if(skills.style.display =="none"){
    skills.style.display="block";
    }
    else{
    skills.style.display ="block";
    } };
    button2.onclick=function(){
    var skills = document.querySelector(".skills");
    var education= document.querySelector(".education");
    var experience= document.querySelector(".experience");
    skills.style.display="none";
    experience.style.display ="none";
    if(education.style.display =="none"){
    education.style.display="block";
    }
    else{
    education .style.display ="block";
    skills.style.display="none";
    }
    };
    button3.onclick=function(){
    var skills = document.querySelector(".skills");
    var education= document.querySelector(".education");
    var experience= document.querySelector(".experience");
    skills.style.display="none";
    education.style.display="none";
    if(experience.style.display =="none"){
    experience.style.display="block";
    }
    else{
    education .style.display ="none";
    skills.style.display="block";
    experience.style.display ="none";
    } };
    document.addEventListener("DOMContentLoaded",function(){
    var menubtn = document.getElementsByClassName("menubtn");
    var sidenav = document.getElementsByClassName("sidenav");
    var menu = document.getElementById("menu");
    sidenav.style.right = "-200px";
    menubtn.onclick = function(){
    if(sidenav.style.right =="-200px"){
    sidenav.style.right = "0";
    menu.src = "images/close.png";
    }
    else{
    sidenav.style.right = "-200px";
    menu.src = "images/menu.png";
    }}});
    document.querySelectorAll("bttn").forEach.onclick =function(){
    let clas=document.getAttribute("this.data-class");
    let d=document.getElementsByClassName(clas);
    if(d.style.display=="none"){
    d.style.display ="block";
    }else{
    d.style.display ="none";
    }
    } 
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
    document.getElementById("quote").innerHTML=(`${data.content} —${data.author}`)
    })
    document.getElementById("ton").onclick=function(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
    document.getElementsByClassName("quote").innerHTML=(`${data.content}
    — ${data.author}`)
    })
    }
    });