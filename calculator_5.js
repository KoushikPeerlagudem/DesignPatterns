
//observer pattern
/*In this module, I has a subject(calcualtion of tip function) and the observer(the screen), so whenever the subject 
changed it's state the subject all of it's observers, in this case only on observer
Can add and remove observers at our ease*/

function ObserverList(){
    this.observerList = [];
  }
   
  ObserverList.prototype.add = function(object){
    return this.observerList.push(object);
  };
   
  ObserverList.prototype.count = function(){
    return this.observerList.length;
  };
  ObserverList.prototype.get = function( index ){
    if( index > -1 && index < this.observerList.length ){
      return this.observerList[ index ];
    }
  };

  ObserverList.prototype.indexOf = function( obj, startIndex ){
    var i = startIndex;
   
    while( i < this.observerList.length ){
      if( this.observerList[i] === obj ){
        return i;
      }
      i++;
    }
    return -1;
  };
   
  ObserverList.prototype.removeAt = function( index ){
    this.observerList.splice( index, 1 );
  };

function Subject(){
    this.observers = new ObserverList();
  }
   
  Subject.prototype.addObserver = function( observer ){
    this.observers.add( observer );
  };
   
  Subject.prototype.removeObserver = function( observer ){
    this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
  };
   
  Subject.prototype.notify = function( context ){
    var observerCount = this.observers.count();
    for(var i=0; i < observerCount; i++){
      this.observers.get(i).update( context );
    }
  };
  
  function extend( obj, extension ){
      for(var key in extension)
      {
          obj[key]=extension[key];
      }
  }
 

 function start(){          // <- This function will be invoked by the page
 var tipText=document.getElementById("tip"), calculatebutton=document.getElementById("calculate");
 extend(calculatebutton,new Subject());
 extend(tipText,observer);
 tipText.update=function(text)
 {
     document.getElementById("totalTip").style.display = "block";
     document.getElementById("tip").innerHTML = text;
 };
 calculatebutton.addObserver(tipText);
 var tip=calculateTip();
 calculatebutton.notify(tip);
 calculatebutton.removeObserver(tipText);
 }

 function calculateTip(){
    var billAmt = parseFloat(document.getElementById("billamt").value);
    var serviceQual = parseFloat(document.getElementById("serviceQual").value);
    var numOfPeople = parseInt(document.getElementById("peopleamt").value);
    if (this.billAmt <=0 || this.serviceQual == 0 || this.numOfPeople == 0) 
        alert("Please enter values");
    var total = (billAmt*serviceQual)/(numOfPeople);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    return total;
 }

 function observer()
 {
     this.update=function(text){
     }
 }
 
 


