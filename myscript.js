console.log('conneced');
//Grab Squares
var square = document.querySelectorAll("td");
//Clear Screen
var link= document.querySelector("#btn");
function clear()
{
    for (var i=0;i<square.length;i++)
    {
      square[i].textContent='';
    }
}
link.addEventListener('click',clear);
//Filling X and O by clicking using this keyword
function fill()
{
if(this.textContent === '')
    this.textContent = 'X';
else if(this.textContent === 'X')
        this.textContent = 'O';
else
        this.textContent = '' ;
}
for (var i=0;i<square.length;i++)
    {
        square[i].addEventListener('click',fill);
    }
for(var i=0;i<square.length;i++)
    {
        if(i===i+1&& i==i+2)
            alert('X won');
    }