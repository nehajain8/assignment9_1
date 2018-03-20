//Function that creates object using object constructor
function createObject() {
	var o=new Object();
	o.name= "bala";
	o.height= 180;
	o.aboutYourself= function() {
		return "I am "+ o.name + ". I am " + o.height + "cm height";
	}
	return o; 
}
var me= createObject();
console.log(me.aboutYourself());