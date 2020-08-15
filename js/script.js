var num1 = 0;
var num2 = 0;
var sign = null;

function setvalue(num) {
    var old = document.getElementById('result').value;
    var res = 0;
    if (old !== '0') {
        res = old + num;
    } else {
        res = num;
    }
    document.getElementById('result').value = res;
}

function keepvalue(alamat) {
    sign = alamat;
    num1 = document.getElementById('result').value;
    document.getElementById('result').value = "";
    console.log(num1);
}

function ShowResult() {
    num2 = document.getElementById('result').value;
    if (sign === '+') {
        var final = parseInt(num1) + parseInt(num2);
    } else if (sign === '-') {
        var final = parseInt(num1) - parseInt(num2);
    } else if (sign === '*') {
        var final = parseInt(num1) * parseInt(num2);
    } else if (sign === '/') {
        var final = parseInt(num1) / parseInt(num2);
    }

    document.getElementById('result').value = final;
    num1 = 0;
    num2 = 0;
}

function cls() {
    num1 = 0;
    num2 = 0;
    document.getElementById('result').value = "0";
}