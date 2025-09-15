var m=" "; 

for (var i= 1; i<13; i++)
{
    m+= `<option>${i}</option>`;
}

document.getElementById("month").innerHTML= m;

var user = {
    name: 'Rashad',
    age: 21,
    email: 'rashadhindi2004@gmail.com', 
    city: 'nablus'
}

var r= ""; 

r+= `<td> ${user.name}</td>` + `<td> ${user.age}</td>` + `<td> ${user.email}</td>` + `<td> ${user.city}</td>` ;

document.getElementById("row").innerHTML= r;


