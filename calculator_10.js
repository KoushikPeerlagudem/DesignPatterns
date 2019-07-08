
//factory pattern
/* Created a factory pattern function/class which cretes the objects 
In our example the objects and complexity associated with them to create them is very small,
This pattern is of great use when there is so much complexity associated in creaitng the objects 
we can take away all of that logic and encapsulate in the factory for reuse  */

function validate(options)
    {
      this.billAmt=options.billAmt;
      this.serviceQual=options.serviceQual;
      this.numOfPeople=options.numOfPeople;
      this.validate_innerf =function(){
      if (this.billAmt <=0 || this.serviceQual == 0 || this.numOfPeople == 0) 
      {
      alert("Please enter values");
      return false;
      }
     return true;
    }; 
}
function calculate(options){
    this.billAmt=options.billAmt;
    this.serviceQual=options.serviceQual;
    this.numOfPeople=options.numOfPeople;

    this.calculate_innerf=function(){
    var total = (billAmt*serviceQual)/(numOfPeople);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    };
}
function factoryPattern(){
                           
}
factoryPattern.prototype.createclass=function(options)
{
 var newclass;                                         // <-logic associated in creating the two classes, it's simple here in this example
 switch(options.classname){
  case "validate": newclass=validate;
  break;
  case "calculate":newclass=calculate;
  break;
  default:break;
 }
 return new newclass(options);
}
function calculateTip(){
    this.billAmt = parseFloat(document.getElementById("billamt").value);
    this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
    this.numOfPeople = parseInt(document.getElementById("peopleamt").value);
    var factory=new factoryPattern();
    var validate_instance=factory.createclass({
        classname:"validate",
        billAmt:this.billAmt,
        serviceQual:this.serviceQual,
        numOfPeople:this.numOfPeople
    });
    console.log(validate_instance);
    validate_instance.validate_innerf();
    var calculate_instance=factory.createclass({
        classname:"calculate",
        billAmt:this.billAmt,
        serviceQual:this.serviceQual,
    });
    calculate_instance.calculate_innerf();
}