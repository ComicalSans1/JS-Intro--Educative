var musketeers = ["Athos", "Porthos", "Aramis"];

musketeers.push("D’Artagnan");

var index = musketeers.indexOf("Aramis");
if (index > -1) { 
    console.log(musketeers.splice(index, 2));   
}