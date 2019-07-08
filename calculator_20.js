
//lazy initilization design pattern
/* In this design pattern the initilization is done until the object is required, this is somewhat similar to the
singleton design pattern
Also the calculation of the data and also be delayed until it is required */


function calculateTip(){

var tip=(function(){   
    var instance={};
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
    get:function(type){
        if(typeof instance[type] === "undefined")
        {
          instance[type]=init();
        }
        return instance[type];
    }
};
})();

var instance_1=tip.get("calculate");
    instance_1.init1();
    if(instance_1.validate_public())
    {
        instance_1.calculate_public();
    }
    else
    {
      return;
    }

}