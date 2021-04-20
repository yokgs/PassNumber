$(document).ready(function(){
var mode = "normal";
var auto = "on";
$(".n").show();
$(".d").hide();
var w = $(window).width();
var wo = (w/2) - 7.5 ;
$(".ag").width(wo)
$(".b").hide();
$("#overlay").hide();
$(".c").hide();

$("#setting").click(function(){
$(".c").removeClass("t");
$(".c").fadeIn(700);
$("#overlay").fadeIn(700);
})

$(".ad").click(function(){
open("https://twitter.com/Y_OKGs/")
})
$(".ab").click(function(){
open("https://github/yokgs/")
})
$(".ac").click(function(){
open("https://www.instagram.com/y.okg/")
})
$("#us").click(function(){
$(".b").removeClass("t");
$(".b").fadeIn(700);
$("#overlay").fadeIn(700);
})
$(".s").click(function(){
$("#overlay").hide();
$(".b").addClass("t");
$(".b").fadeOut(700);
})
$(".s").click(function(){
$("#overlay").hide();
$(".c").addClass("t");
$(".c").fadeOut(700);
})
$("#overlay").hover(function(){
$("#overlay").hide();
$(".b").addClass("t");
$(".b").fadeOut(700);
$(".c").addClass("t");
$(".c").fadeOut(700);
})
var m = 8;
$(".f").click(function(){
if(m>8){
$(".i").html(m-1)
$(".e").removeClass("j");
$(".e").removeClass("r");
if(m==9){
$(".f").addClass("h");
}
else{
$(".f").removeClass("h")
}
$(".g").removeClass("h");
setTimeout(function(){$(".e").addClass("j");},90)
return m = m - 1;
}
})
$(".g").click(function(){
if(m<20){
$(".i").html(m+1)
$(".e").removeClass("j");
$(".e").removeClass("r");
if(m==19){
$(".g").addClass("h");
}
else{
$(".g").removeClass("h")
}
$(".f").removeClass("h")
setTimeout(function(){$(".e").addClass("j");},90)
return m = m + 1;
}
})

$(".l").click(function(){
var d = $(".l").attr("data");
if(d=="1"){
$(".l").attr("data","0");
$(".d").hide();
$(".g").removeClass("q");
$(".f").removeClass("p");
$(".e").removeClass("r");
$(".n").fadeIn().addClass("r");
return auto="on";
}
if(d=="0"){
$(".l").attr("data","1");
$(".n").hide().removeClass("r");
$(".d").fadeIn();
$(".g").addClass("q");
$(".f").addClass("p");
$(".e").addClass("r");
return auto="off";
}
})

$(".al").click(function(){
$(".al").addClass("am");
$(".aj").removeClass("am");
$(".ak").removeClass("am");
return mode="hard";
})
$(".aj").click(function(){
$(".aj").addClass("am");
$(".ak").removeClass("am");
$(".al").removeClass("am");
return mode="easy";
})
$(".ak").click(function(){
$(".ak").addClass("am");
$(".aj").removeClass("am");
$(".al").removeClass("am");
return mode="normal";
})
$("#play").click(function(){

var a = $("#number").val();
if(auto=="on"){
if(mode=="hard"){
var i = 16;
}
if(mode=="normal"){
var i = 8;
}
if(mode=="easy"){
var i = 8;
}
}
else{
var i = m ;
}
var x = "";
var res = "";
while(a>0){
var b = a%2;
var a = Math.floor(a/2);
var res = res + b;
}
while(i>0){
if(mode=="normal"){
var resx = eval(res) % 36;
switch(resx){
case 0:
var x = x +"q"
break;
case 1:
var x = x +"w"
break;
case 2:
var x = x +"e"
break;
case 3:
var x = x +"r"
break;
case 4:
var x = x +"t"
break;
case 5:
var x = x +"y"
break;
case 6:
var x = x +"u"
break;
case 7:
var x = x +"i"
break;
case 8:
var x = x +"o"
break;
case 9:
var x = x +"p"
break;
case 10:
var x = x +"a"
break;
case 11:
var x = x +"s"
break;
case 12:
var x = x +"d"
break;
case 13:
var x = x +"f"
break;
case 14:
var x = x +"g"
break;
case 15:
var x = x +"h"
break;
case 16:
var x = x +"j"
break;
case 17:
var x = x +"k"
break;
case 18:
var x = x +"l"
break;
case 19:
var x = x +"z"
break;
case 20:
var x = x +"x"
break;
case 21:
var x = x +"c"
break;
case 22:
var x = x +"v"
break;
case 23:
var x = x +"b"
break;
case 24:
var x = x +"n"
break;
case 25:
var x = x +"m"
break;
case 26:
var x = x +"1"
break;
case 27:
var x = x +"2"
break;
case 28:
var x = x +"3"
break;
case 29:
var x = x +"4"
break;
case 30:
var x = x +"5"
break;
case 31:
var x = x +"6"
break;
case 32:
var x = x +"7"
break;
case 33:
var x = x +"8"
break;
case 34:
var x = x +"9"
break;
case 35:
var x = x +"0"
break;
}
}
if(mode=="hard"){
var resx = eval(res) % 62;
switch(resx){
case 0:
var x = x +"q"
break;
case 1:
var x = x +"w"
break;
case 2:
var x = x +"e"
break;
case 3:
var x = x +"r"
break;
case 4:
var x = x +"t"
break;
case 5:
var x = x +"y"
break;
case 6:
var x = x +"u"
break;
case 7:
var x = x +"i"
break;
case 8:
var x = x +"o"
break;
case 9:
var x = x +"p"
break;
case 10:
var x = x +"a"
break;
case 11:
var x = x +"s"
break;
case 12:
var x = x +"d"
break;
case 13:
var x = x +"f"
break;
case 14:
var x = x +"g"
break;
case 15:
var x = x +"h"
break;
case 16:
var x = x +"j"
break;
case 17:
var x = x +"k"
break;
case 18:
var x = x +"l"
break;
case 19:
var x = x +"z"
break;
case 20:
var x = x +"x"
break;
case 21:
var x = x +"c"
break;
case 22:
var x = x +"v"
break;
case 23:
var x = x +"b"
break;
case 24:
var x = x +"n"
break;
case 25:
var x = x +"m"
break;
case 26:
var x = x +"1"
break;
case 27:
var x = x +"2"
break;
case 28:
var x = x +"3"
break;
case 29:
var x = x +"4"
break;
case 30:
var x = x +"5"
break;
case 31:
var x = x +"6"
break;
case 32:
var x = x +"7"
break;
case 33:
var x = x +"8"
break;
case 34:
var x = x +"9"
break;
case 35:
var x = x +"0"
break;
case 36:
var x = x +"A"
break;
case 37:
var x = x +"Z"
break;
case 38:
var x = x +"E"
break;
case 39:
var x = x +"R"
break;
case 40:
var x = x +"T"
break;
case 41:
var x = x +"Y"
break;
case 42:
var x = x +"U"
break;
case 43:
var x = x +"I"
break;
case 44:
var x = x +"O"
break;
case 45:
var x = x +"P"
break;
case 46:
var x = x +"Q"
break;
case 47:
var x = x +"S"
break;
case 48:
var x = x +"D"
break;
case 49:
var x = x +"F"
break;
case 50:
var x = x +"G"
break;
case 51:
var x = x +"H"
break;
case 52:
var x = x +"J"
break;
case 53:
var x = x +"K"
break;
case 54:
var x = x +"L"
break;
case 55:
var x = x +"M"
break;
case 56:
var x = x +"W"
break;
case 57:
var x = x +"X"
break;
case 58:
var x = x +"C"
break;
case 59:
var x = x +"V"
break;
case 60:
var x = x +"B"
break;
case 61:
var x = x +"N"
break;
}
}
if(mode=="easy"){
var resx = eval(res) % 10;
switch(resx){
case 0:
var x = x +"1"
break;
case 1:
var x = x +"2"
break;
case 2:
var x = x +"3"
break;
case 3:
var x = x +"4"
break;
case 4:
var x = x +"5"
break;
case 5:
var x = x +"6"
break;
case 6:
var x = x +"7"
break;
case 7:
var x = x +"8"
break;
case 8:
var x = x +"9"
break;
case 9:
var x = x +"0"
break;
}
}
var a = res;
var res = "";
while(a>0){
var b = a%2;
var a = Math.floor(a/2);
var res = res + b;
}
i--;
}
$(".a").remove();
if(x==""){
$("body").append("<div class='a'>empty</div>");
}
else{
var kl = $("<input>").val(x).appendTo("body").select()
document.execCommand("copy");
kl.remove()
$("body").append("<div class='a'>"+x+"</div>");
}
})

})
