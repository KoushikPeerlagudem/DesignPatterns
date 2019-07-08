

//mvvm
/* mvvm design pattern have three components module, view, view module
viewModule responds to the user input 
Viewmodule contains all the business logic and it retrives the data in the module, process it 
and updates the view */

function model(){
    this.billAmt = parseFloat(document.getElementById("billamt").value);
    this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
    this.numOfPeople = parseInt(document.getElementById("peopleamt").value);
}


function view(){
this.updateView=function(total){
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
};
}


function viewModel(){
this.model1=new model();
this.view1=new view();
this.validate=function(){
    if (this.model1.billAmt <=0 || this.model1.serviceQual == 0 || this.model1.numOfPeople == 0) 
    {
     alert("Please enter values");
    }
};
this.calculate=function(){
    var total = (this.model1.billAmt*this.model1.serviceQual)/(this.model1.numOfPeople);
    total = Math.round(total * 100) / 100;
    return total.toFixed(2);;
};
validate();
this.view1.updateView(calculate());
}