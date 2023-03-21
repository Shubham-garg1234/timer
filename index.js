var remains=1209600;
const fix=1209600;
function floor(x,y)
{
    return(x-(x%y))/y;
}
function timer()
{
setTimeout(function fun(){
var days=floor(remains,86400);
var hours=floor((remains-(days*86400)),3600);
var minutes=floor((remains-(days*86400)-(hours*3600)),60);
var second=((remains-(days*86400)-(hours*3600)-minutes*60));
console.log(second);
console.log(minutes);
console.log(hours);
console.log(days);
document.getElementById("days").innerHTML=days;
if(minutes<10)
document.getElementById("minutes").innerHTML="0"+minutes;
else
{
document.getElementById("minutes").innerHTML=minutes;
}
if(hours<10)
document.getElementById("hours").innerHTML="0"+hours;
else
{
document.getElementById("hours").innerHTML=hours;
}
if(days<10)
document.getElementById("days").innerHTML="0"+days;
else
{
document.getElementById("days").innerHTML=days;
}
if(second<10)
document.getElementById("seconds").innerHTML="0"+second;
else
{
document.getElementById("seconds").innerHTML=second;
}
remains=remains-1;
timer();
}, 1000);
}
timer();
function fb()
{
window.open("https://www.facebook.com/");
}
function insta()
{
    window.open("https://www.instagram.com");
}
function pi()
{
    window.open("https://in.pinterest.com");
}