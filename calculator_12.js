

//Decorator pattern
/*Decorator pattern used to wrap a objects with a decorator which an add additional responsiblites to wrapped object*/

function calculate(){
    this.init=function() {
        this.billAmt = parseFloat(document.getElementById("billamt").value);
        this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
        this.numOfPeople = parseInt(document.getElementById("peopleamt").value); 
    };
    this.validate=function(){
    };
    this.tip=function(){
    };
}
function validate_decorator(calculate)       // decorator overriding the validate function the wrapped object.
{
    calculate.validate=function(){
        if (this.billAmt <=0 || this.serviceQual == 0 || this.numOfPeople == 0) 
        {
         alert("Please enter values");
         return false;
        }
    return true;
    };
    return calculate.validate()
}
function tip_decorator(calculate)     // decorator overriding the tip function the wrapped object.
{
    calculate.tip=function(){
        var total = (this.billAmt*this.serviceQual)/(this.numOfPeople);
            total = Math.round(total * 100) / 100;
            total = total.toFixed(2);
            document.getElementById("totalTip").style.display = "block";
            document.getElementById("tip").innerHTML = total;
    };
    return calculate.tip();
}
function calculateTip()
{
    var instance=new calculate();
    instance.init();
 
    if(validate_decorator(instance))
        tip_decorator(instance);
    else
     alert("oops something went wrong in the code");

}