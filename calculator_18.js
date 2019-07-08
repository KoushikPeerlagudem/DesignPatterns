
//adapter pattern
/* two incompatiable objects are made to work together using a adapter calculateandvalidate  function */

function input()
{
    this.billAmt = parseFloat(document.getElementById("billamt").value);
    this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
    this.numOfPeople = parseInt(document.getElementById("peopleamt").value);
}
function validate()
{
    this.validate_input=function()
    {
        if (this.billAmt <=0 || this.serviceQual == 0 || this.numOfPeople == 0) 
        {
         alert("Please enter values");
         return false;
        }
        return true;
    };
}
function calculate()
{
    this.calulate_Tip=function(){
        var total = (this.billAmt*this.serviceQual)/(this.numOfPeople);
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);
        document.getElementById("totalTip").style.display = "block";
        document.getElementById("tip").innerHTML = total;
    };
}
Function.prototype.implementsFor = function( parentClassOrObject ){
    if ( parentClassOrObject.constructor === Function )
    {
        this.prototype = new parentClassOrObject();
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject.prototype;
    }
    else
    {
        this.prototype = parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject;
    }
    return this;
};
function calulateAndValidate(object)              // Adapter function 
{      
    this.validate_instance=object;
    this.validate_input_through_calculate=function()
    {
        return this.validate_instance.validate_input();
    };
}
function calculateTip()
{
    validate.implementsFor(input);
    calculate.implementsFor(input);
    calulateAndValidate.implementsFor(calculate);
    var instance=new calulateAndValidate(new validate());
    if(instance.validate_input_through_calculate())
       instance.calulate_Tip();
    else
    console.log("something went wrong");
}