let a = document.getElementById("input1");
let b = document.getElementById("input2");
let c = document.getElementById("result");

//add
function addition()
{
    let d=parseFloat(a.value) + parseFloat(b.value)
    result.value=d;
}

//sub
function sub()
{
    let d=parseFloat(a.value) - parseFloat(b.value)
    result.value=d;
}

//Multiply
function mul()
{
    let d=parseFloat(a.value) * parseFloat(b.value)
    result.value=d;
}

//division
function div()
{
    let d=parseFloat(a.value) / parseFloat(b.value)
    result.value=d;
}

//clear
function clearValue()
{
    a.value="";
    b.value="";
    c.value="";
}

