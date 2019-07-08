
//command pattern
/* Below we encapsulate the various commands and excute them, we can also unexcute if we use a queue to register the commands which we
invoked and undo them  */

function calculateTip(){
    commandModule.excute=function(temp){
    return commandModule[temp] && commandModule[temp].apply(commandModule,[].slice.call(arguments,1));
    }
   var billamt = parseFloat(document.getElementById("billamt").value);
   var serviceQual = parseFloat(document.getElementById("serviceQual").value);
   var numOfPeople = parseInt(document.getElementById("peopleamt").value);
   commandModule.excute("validate_input",billamt,serviceQual,numOfPeople);
   commandModule.excute("calculate",billamt,serviceQual,numOfPeople);
}

var commandModule={
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