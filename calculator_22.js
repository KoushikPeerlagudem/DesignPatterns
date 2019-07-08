

//builder pattern
/*The builder function here is used to initilase the data required by the functions */

function builder(){
    this.setbillAmt=function(){
        this.billAmt=parseFloat(document.getElementById("billamt").value);
    };

    this.setnumOfPpl=function(){
        this.serviceQual=parseFloat(document.getElementById("serviceQual").value);
    };
    this.setServiceQual=function(){
       this.numOfPpl=parseInt(document.getElementById("peopleamt").value);
    };
    this.getbillAmt=function(){
       return this.billAmt;
    };

    this.getServiceQual=function(){      
        return this.serviceQual;
    };
    this.getnumOfPpl=function(){
       return this.numOfPpl;
    };
}

function validate(object)
{
    if (object.billAmt <=0 || object.serviceQual == 0 || object.numOfPeople == 0)  // can also use the getter functions to access the data
    {
     alert("Please enter values");
     return false;
    }
return true;
}

function calculate(object)
{
    console.log(object.billAmt);
    var total = (object.billAmt*object.serviceQual)/(object.numOfPpl);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

function calculateTip(){
    var instance=new builder();
    instance.setbillAmt();
    instance.setServiceQual();
    instance.setnumOfPpl();
    if(validate(instance))
       calculate(instance);
    else
      console.log("oops something is wrong");
}