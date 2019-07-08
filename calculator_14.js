
//mvc pattern 
/* mvc design pattern have three components module, view, controller
controller responds to the user input 
controller invokes the module, the module then process and updates the view */

function model()
{
    this.billAmt = parseFloat(document.getElementById("billamt").value);
    this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
    this.numOfPeople = parseInt(document.getElementById("peopleamt").value);
    this.calculate=function(view_instane)
{
    var total = (this.billAmt*this.serviceQual)/(this.numOfPeople);
    total = Math.round(total * 100) / 100;
    view_instane.updateView(total.toFixed(2));  // should've used observer pattern but since there is only observer in our current example
                                                // this is feasiab]le.
};
}

function view(){
this.updateView=function(total)
{
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
}


function controller(){
    this.model1=new model();
    this.view1=new view();
    this.validate_data=function(){
        if (this.model1.billAmt <=0 || this.model1.serviceQual == 0 || this.model1.numOfPeople == 0) 
        {
         alert("Please enter values");
         return false;
        }
        return true;
    };
    this.calculate=function(){
        model1.calculate(view1);
    };
    if(validate_data())
        calculate();
    else
        alert("oops something went wrong");
}