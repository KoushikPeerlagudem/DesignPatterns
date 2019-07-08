
//flyweight design pattern 
/* This pattern can be used to efficently share data between multiple objects and also reduce the object creation 
Although I could implement the logic to reduce object creation but there are no intrinsic data values which remain constant
throughtout the process, so it won't affect the performance of the code, so I have implemented the a block of code below which effciently 
shares data between multiple objects*/


function init()
{
    this.billAmt = parseFloat(document.getElementById("billamt").value);
    this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
    this.numOfPeople = parseInt(document.getElementById("peopleamt").value);
}

function calculate(object){
    var total = (object.billAmt*object.serviceQual)/(object.numOfPeople);
            total = Math.round(total * 100) / 100;
            total = total.toFixed(2);
            document.getElementById("totalTip").style.display = "block";
            document.getElementById("tip").innerHTML = total;
}

function  validate_data(object){
    if (object.billAmt <=0 || object.serviceQual == 0 || object.numOfPeople == 0) 
    {
     alert("Please enter values");
     return false;
    }
return true;
}

function calculateTip(){
    var shared_data=new init();
    if(validate_data(shared_data))
       calculate(shared_data);
    else
     alert("oops something went wrong");    
}