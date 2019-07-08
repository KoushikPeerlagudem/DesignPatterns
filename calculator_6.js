
//mediator pattern


function calculateTip(){       // <-mediator function which co-oridantes the actions between two objetcs init() and valid_data()
    init.call(this);
    if(valid_data.call(this))
    {
        var total = (this.billAmt*this.serviceQual)/(this.numOfPeople);
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);
        document.getElementById("totalTip").style.display = "block";
        document.getElementById("tip").innerHTML = total;
    }
    else
    {
        alert("oops something went wrong.....sorry bro")
    }
}

function init()
{
    this.billAmt = parseFloat(document.getElementById("billamt").value);
    this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
    this.numOfPeople = parseInt(document.getElementById("peopleamt").value);
}

function valid_data()
{
    if (this.billAmt <=0 || this.serviceQual == 0 || this.numOfPeople == 0) 
               {
                alert("Please enter values");
                return false;
               }
        return true;
}