var myText = document.getElementById("my-text");
var result = document.getElementById("result");
var limit = 140;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input",function(){
    var textLength = myText.value.length;
    result.textContent = textLength + "/" + limit;

    if(textLength > limit){
        myText.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    }
    else{
        myText.style.borderColor = "#31821b";
        result.style.color = "#31821b";
    }
});
       function displayDetails(){
        let data = "";  let name = document.getElementById("userName").value 
        let email = document.getElementById("userEmail").value
        let comment = document.getElementById("my-text").value
       
       data = "Name : "+name+"<br/>Email : "+email+ "<br/>Comment : "+comment 
       
       document.getElementById("data").innerHTML = data  // display data to paragraph
       }
