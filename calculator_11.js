
//mixin design pattern
/*This is a great design to enable javascript to inherit some the methods and variables of the parent class
Below I have implemented the same 
We can also inherit selected properties of the pattern also*/

function calculate(){
    this.billAmt = parseFloat(document.getElementById("billamt").value);
    this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
    this.numOfPeople = parseInt(document.getElementById("peopleamt").value);
}
calculate.prototype.calculate_innerf=function()
{
    var total = (this.billAmt*this.serviceQual)/(this.numOfPeople);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
};
function validate(){
    calculate.call(this);
    this.validate_innerf=function()
    {
        if (this.billAmt <=0 || this.serviceQual == 0 || this.numOfPeople == 0) 
               {
                alert("Please enter values");
                return false;
               }
        return true;
    };
}
function calculateTip()
{
    validate.prototype=Object.create(calculate.prototype);   // sub-class -> validate parent-class->calculate
    var instance=new validate();
    console.log(instance);
    instance.validate_innerf();
    instance.calculate_innerf();

}