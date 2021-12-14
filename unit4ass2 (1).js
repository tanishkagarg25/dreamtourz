
var exports=module.exports={};
exports.mealtime=function(time){
    var AM_PM= time.split(" ")[1];
    var crt=time.split(":")[0];
    if(AM_PM=='AM' && crt>=7 && crt<=11 ){
        return("its breakfast time");
    }
    else if(AM_PM=='PM' && crt>=12 && crt<=3){
        return("its lunch time");
    }
     else if(AM_PM=='PM' && crt>=7 && crt<=10){
        return("its dinner time");
    }
};