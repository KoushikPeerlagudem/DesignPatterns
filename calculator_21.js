

//proxy pattern
/* The proxylayer is used as a proxy to access the mainlayer by the calculateTip function */

function mainlayer(){
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
    this.calculate_tip=function()
    {
    var total = (this.billAmt*this.serviceQual)/(this.numOfPeople);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    };
}

function proxylayer(object){
    this.instance_refernce=object;
    this.calculate=function(){
      this.instance_refernce.calculate_tip.call(this.instance_refernce);
    };
    this.validate=function(){
      this.instance_refernce.validate_i.call(this.instance_refernce);
    };
}

function calculateTip(){
var instance_proxy=new proxylayer(new mainlayer());
instance_proxy.calculate();
instance_proxy.validate();
}