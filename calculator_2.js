

//MODULE PATTERN
/* Defined a module and returned the basic functions accesing the private data inside the module */

function calculateTip()
{
    var new_tip= (function(){                               //  <-module
        var billAmt,serviceQual,numOfPeople;
        initalize=function(){
            this.billAmt = parseFloat(document.getElementById("billamt").value);
            this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
            this.numOfPeople = parseInt(document.getElementById("peopleamt").value); 
        };
        function validate_i()
        {
                   if (this.billAmt <=0 || this.serviceQual == 0 || this.numOfPeople == 0) 
                   {
                    alert("Please enter values");
                    return false;
                   }
            return true;
        };
      
        
        return{
            validate_public : validate_i,
            calculate_public : function()
            {
            var total = (this.billAmt*this.serviceQual)/(this.numOfPeople);
            total = Math.round(total * 100) / 100;
            total = total.toFixed(2);
            document.getElementById("totalTip").style.display = "block";
            document.getElementById("tip").innerHTML = total;
            },
            init : initalize

        };
    })();
    new_tip.init();

    if(new_tip.validate_public())
    {
        new_tip.calculate_public();
    }
    else
    {
      return;
    }
}
