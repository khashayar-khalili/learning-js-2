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