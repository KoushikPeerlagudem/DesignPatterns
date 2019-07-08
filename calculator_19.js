

//iterator pattern
/* This code shows that a iterator is explictly defined which iterates through a datatype of object */

function input_array(){
    this.object=[];
    this.object[0]=parseFloat(document.getElementById("billamt").value);
    this.object[1]=parseFloat(document.getElementById("serviceQual").value);
    this.object[2]=parseInt(document.getElementById("peopleamt").value);
}
function iterator(){              // <-ITERATOR
    this.i=0;
    this.hasNext=function(){
        if(this.i>=this.object.length||this.object[this.i]===null)
          return false;
        else
         return true;
    };
    this.next=function(){
        if(this.i>=0&&this.i<this.object.length)
        {
            var temp=this.object[this.i];
            this.i=this.i+1;
            return temp;
        }
        else 
         return false;
    };
}
Function.prototype.implementsFor = function( parentClassOrObject ){
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
input_array.implementsFor(iterator);
function calculateTip()
{
    var instance=new input_array();
    var i=0;
    var obj=[];
    var i=0;
    while(instance.hasNext())      // <-iterating through object
    {
        obj[i]=instance.next();
        i++;
    }
    if (obj[0]<=0 || obj[1] == 0 || obj[2] == 0) 
    {
         alert("Please enter values");
    }
    else
    {
        var total = (obj[0]*obj[1])/(obj[2]);
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);
        document.getElementById("totalTip").style.display = "block";
        document.getElementById("tip").innerHTML = total;
    }
}