

//constructor pattern 
/* defined a constructor and using that constructor created a object */ 

function Tip() {               // <- constructor
    this.billAmt = parseFloat(document.getElementById("billamt").value);
    this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
    this.numOfPeople = parseInt(document.getElementById("peopleamt").value);

    this.validate_i=function()
    {
               if (this.billAmt <=0 || this.serviceQual == 0 || this.numOfPeople == 0) 
               {
                alert("Please enter values");
                return false;
               }
        return true;
    };
  
    this.calculate=function()
    {
    var total = (this.billAmt*this.serviceQual)/(this.numOfPeople);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    };
}


function calculateTip()
{
    var new_tip=new Tip();
    if(new_tip.validate_i())
    {
        new_tip.calculate();
    }
    else
    {
      return;
    }
}

