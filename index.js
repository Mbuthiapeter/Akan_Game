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
        
    }
            
  }