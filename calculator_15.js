

//mvp pattern
/* mvp design pattern have three components module, view, presenter
presenter responds to the user input 
presenter invokes the module, the module then process and rasies the event to presenter 
presenter then updates the view */



function model(){
    this.billAmt = parseFloat(document.getElementById("billamt").value);
    this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
    this.numOfPeople = parseInt(document.getElementById("peopleamt").value);
    this.calculate=function()
   {
    var total = (this.billAmt*this.serviceQual)/(this.numOfPeople);
    total = Math.round(total * 100) / 100;
    return total.toFixed(2);   
    };
}


function view(){
this.set_view=function(total){
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
};


}
function presenter(){
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
        view1.set_view(model1.calculate());
    };
    if(validate_data())
        calculate();
    else
        alert("oops something went wrong");
}