let bool = false;

var d = new Date();
var first_week = d.getDate();
var the_day = d.getDay();

if(first_week <= 7 && the_day == 0)
{
  // It's the first Sunday of the month
  bool = true;
}


if (bool){
  document.body.style.backgroundColor = "#4cd137";
  document.getElementById("text").innerHTML =  "Tak";
} else{
  document.body.style.backgroundColor = "#e84118";
  document.getElementById("text").innerHTML = "Nie"

}
