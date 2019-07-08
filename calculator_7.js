
//prototype pattern
/* Defined a basic template and using which we create objects considering it as a blueprint*/

var tip={              // <-prototype 
   validate_input : function(billAmt,serviceQual,numOfPeople)
   {
     if (billAmt <=0 || serviceQual == 0 || numOfPeople == 0) 
     {
     alert("Please enter values");
     return false;
     }
    return true;
   },
   calculate : function(billAmt,serviceQual,numOfPeople)
   {
    var total = (billAmt*serviceQual)/(numOfPeople);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
   }
};
function calculateTip()
{
  var billamt = parseFloat(document.getElementById("billamt").value);
  var serviceQual = parseFloat(document.getElementById("serviceQual").value);
  var numOfPeople = parseInt(document.getElementById("peopleamt").value);
  var newObject=Object.create(tip);                                         // <-creating the object of the prototype
  if(newObject.validate_input(billamt,serviceQual,numOfPeople))
  {
     newObject.calculate(billamt,serviceQual,numOfPeople);
  }
}