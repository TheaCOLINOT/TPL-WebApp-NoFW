function sayHello(){
    console.log("Hello World!");
}

function addToList(){
    const INPUT = document.getElementById("textInput"); // get html element with id
    const LIST = document.getElementById("list");
    LIST.innerHTML += "<li>" + INPUT.value + "</li>"; // add content to list elemenet
    INPUT.value = ""; // reset input value
}