var resultTitle = document.getElementById('feedBack');
var story = document.getElementById('story');
var btn = document.getElementById("game");

$(document).ready(function() {
    $('#formDiv').hide();
    $('#sub').on('click', function() {            
           processDetails();
    });    
});

btn.onclick = function() {getDetails()};
function getDetails() {
    btn.remove();
    story.remove();
    $('#formDiv').toggle(300);    
  }

function processDetails() {    
    var year = document.forms['dataForm'].elements['yob'].value;
    var month = document.forms['dataForm'].elements['mob'].value;
    var day = document.forms['dataForm'].elements['dob'].value;
    if(year <1000 || month >12 || day >31){
        alert("Oops! Wrong entry in your details");
    }else{
        var cc = parseInt(year.charAt(0)+year.charAt(1));
        var yy = parseInt(year.charAt(2)+year.charAt(3));
        var mm = parseInt(month);
        var dd = parseInt(day);
        var dayOfWeek = Math.trunc(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);

        var ele = document.getElementsByName('gender');
        var sex = "male";              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                sex = ele[i].value;
            }
            //alert(dayOfWeek+sex);
        if(dayOfWeek === 0 ){
            if(sex === "female"){
                alert("Your Akan name is Ama.");
            }else{
                alert("Your Akan name is Kwame.");
            }            
        } else if(dayOfWeek === 1 ){
            if(sex === "female"){
                alert("Your Akan name is Akosua.");
            }else{
                alert("Your Akan name is Kwasi.");
            }            
        } else if(dayOfWeek === 2 ){
            if(sex === "female"){
                alert("Your Akan name is Adwoa.");
            }else{
                alert("Your Akan name is Kwadwo.");
            }            
        }else if(dayOfWeek === 3 ){
            if(sex === "female"){
                alert("Your Akan name is Abenaa.");
            }else{
                alert("Your Akan name is Kwabena.");
            }            
        }else if(dayOfWeek === 4 ){
            if(sex === "female"){
                alert("Your Akan name is Akua.");
            }else{
                alert("Your Akan name is Kwaku.");
            }            
        }else if(dayOfWeek === 5 ){
            if(sex === "female"){
                alert("Your Akan name is Yaa.");
            }else{
                alert("Your Akan name is Yaw.");
            }            
        }else 
            if(sex === "female"){
                alert("Your Akan name is Afua.");
            }else{
                alert("Your Akan name is Kofi.");
            }           
               
    }
            
  }