function inp(c) {
    var a = document.getElementById('pp');
    var k = document.getElementById('p');
    var b = document.getElementById(c);
    a.innerText = a.innerText + b.innerText;
}
function eql() {
    var a = document.getElementById('pp');
    var k = document.getElementById('p');
    k.innerText = eval(a.innerText);
    a.innerText = '';
}

document.getElementById('ds').addEventListener('click', function () {
    inp('ds');
})
document.getElementById('z').addEventListener('click', function () {
    inp('z');
})
document.getElementById('j').addEventListener('click', function () {
    inp('j', '+');
})
document.getElementById('th').addEventListener('click', function () {
    inp('th', "3");
})
document.getElementById('t').addEventListener('click', function () {
    inp('t');
})
document.getElementById('o').addEventListener('click', function () {
    inp('o');
})
document.getElementById('b').addEventListener('click', function () {
    inp('b');
})
document.getElementById('si').addEventListener('click', function () {
    inp('si');
})
document.getElementById('fv').addEventListener('click', function () {
    inp('fv');
})
document.getElementById('f').addEventListener('click', function () {
    inp('f');
})
document.getElementById('g').addEventListener('click', function () {
    inp('g');
})
document.getElementById('n').addEventListener('click', function () {
    inp('n');
})
document.getElementById('e').addEventListener('click', function () {
    inp('e');
})
document.getElementById('s').addEventListener('click', function () {
    inp('s');
})
document.getElementById('v').addEventListener('click', function () {
    inp('v');
})
document.getElementById('zz').addEventListener('click', function () {
    inp('zz');
})
document.getElementById('m').addEventListener('click', function () {
    inp('m');
})
document.getElementById('ac').addEventListener('click', function () {
    var v = document.getElementById('pp');
    var i = document.getElementById('p');
    v.style.display = 'inline';
    v.innerText = '';
    i.innerText = '0';
})

document.getElementById('eq').addEventListener('click', function () {

    eql();

})
document.getElementById('d').addEventListener('click', function () {
    document.getElementById('pp').innerText = document.getElementById('pp').innerText.slice(0, -1);




})