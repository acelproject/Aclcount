var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var hasil = document.getElementById('hasil');

function fPenjumlahan (){
    hasil.value = Number(number1.value) + Number(number2.value);
}
function fPengurangan (){
    hasil.value = Number(number1.value) - Number(number2.value);
}
function fPerkalian (){
    hasil.value = Number(number1.value) * Number(number2.value);
}
function fPembagian (){
    hasil.value = Number(number1.value) / Number(number2.value);
}
function fModulasi (){
    hasil.value = Number(number1.value) % Number(number2.value);
}
