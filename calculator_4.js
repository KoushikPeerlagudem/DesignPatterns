
//singleton pattern.
/* In this only one object is created no matter how many times you create the object */

function calculateTip()
{
    var new_tip= (function(){
        var single_instance;                //private variable storing the object
        function init(){
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
            init1 : initalize

        };
    }
    return {
        get:function(){
            if(!single_instance)
              single_instance=init();             // logic for creating only one object
            return single_instance;
        }
    };
    })(); 
    
    var instance=new_tip.get();
    instance.init1();
    if(instance.validate_public())
    {
        instance.calculate_public();
    }
    else
    {
      return;
    }
}
