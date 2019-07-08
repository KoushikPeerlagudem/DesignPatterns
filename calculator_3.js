

// Revealing module pattern
/* Defined a module and returned the basic functions accesing the public functions inside the module 
these public functions are accessing the private methods and variables inside the module*/


function calculateTip()
{
    var new_tip= (function(){             // <- module
        var billAmt,serviceQual,numOfPeople;
        function initalize(){
            this.billAmt = parseFloat(document.getElementById("billamt").value);
            this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
            this.numOfPeople = parseInt(document.getElementById("peopleamt").value); 
        }
        function validate_i()
        {
            
                   if (this.billAmt <=0 || this.serviceQual == 0 || this.numOfPeople == 0) 
                   {
                    alert("Please enter values");
                    return false;
                   }
            return true;
        }
        function calculate(){
            var total = (this.billAmt*this.serviceQual)/(this.numOfPeople);
            total = Math.round(total * 100) / 100;
            total = total.toFixed(2);
            document.getElementById("totalTip").style.display = "block";
            document.getElementById("tip").innerHTML = total;
        }
        function initalize_p(){
            initalize();
        }
        function validate_p(){
            return validate_i();
        }
        function calculate_p(){
            calculate();
            
        }
        return{
            validate_public : validate_p,
            calculate_public : calculate_p,
            init : initalize_p
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
