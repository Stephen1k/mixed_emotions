let messages = ["One day at a time", "Things will work out", "Know your worth", "Make it happen", "Be wild for a while", "The test is yet to come", "It's ok not to be ok right now", "You matter", "Follow your dreams"];
let num1,num2,num3;

let random = () =>{
    num1 = Math.floor(Math.random() * messages.length);
    num2 = Math.floor(Math.random() * messages.length);
    num3 = Math.floor(Math.random() * messages.length);
}

let generate = () => {
    random();
    document.getElementById("message1").style.display = "block";
    document.getElementById("message1").innerHTML = messages[num1];
    document.getElementById("message2").innerHTML = messages[num2];
    document.getElementById("message3").innerHTML = messages[num3];
  
    
    // document.getElementsByClassName("message1").innerHTML = messages[random()];
}



random();
console.log(messages[num]);
