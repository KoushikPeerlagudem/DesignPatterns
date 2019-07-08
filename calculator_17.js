

//composite pattern

function common_interface(){
    this.objects=[];
    this.add=function(object)
    {
        this.objects.push(object);
    };
    this.remove=function(index)
    {
        this.objects.slice(index,1);
    };
    this.getIndexof=function(object)
    {
        var n=this.objects.length;
        for(var i=0;i<n;i++)
        {
            if(objects[i]===object)
              return i;
        }
        return -1;
    };
    this.getLength=function(){
        return this.objects.length;
    };
    this.get=function(index)
    {
        if(index>=0&&index<this.objects.length)
           return this.objects[index];
        return -1;
    }

}
Function.prototype.implementsFor = function( parentClassOrObject ){
    console.log(parentClassOrObject.constructor);
    console.log(Function);
    if ( parentClassOrObject.constructor === Function )
    {
        this.prototype = new parentClassOrObject();
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject.prototype;
    }
    else
    {
        this.prototype = parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject;
    }
    return this;
};
function validate(){
this.validate_input=function(billAmt,serviceQual,numOfPeople){
    if (billAmt <=0 || serviceQual == 0 || numOfPeople == 0) 
    {
     alert("Please enter values");
     return false;
    }
    return true;
};
}
function calculate(){
this.calculate_Tip=function(billAmt,serviceQual,numOfPeople)
{
    var total = (billAmt*serviceQual)/(numOfPeople);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
};
}
function calculateTip(){
    this.billAmt = parseFloat(document.getElementById("billamt").value);
    this.serviceQual = parseFloat(document.getElementById("serviceQual").value);
    this.numOfPeople = parseInt(document.getElementById("peopleamt").value); 
    validate.implementsFor(common_interface);
    calculate.implementsFor(common_interface);
    var calculate_instance=new calculate();
    var validate_instance=new validate();
    validate_instance.add(calculate_instance);
    validate_instance.validate_input(billAmt,serviceQual,numOfPeople);
    for(var i=0;i<validate_instance.getLength();i++)
    {
        validate_instance.get(i).calculate_Tip(billAmt,serviceQual,numOfPeople);
    }
}
