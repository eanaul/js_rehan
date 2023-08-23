var ulang = true;
var tebakan = 0;
while (ulang) {
var p = prompt("Masukan angka: ");

if(tebakan >= 3){
    tebakan = 0;
    alert('Kamu menjawab melebihi kesempatan yang diberikan, angka akan diacak kembali')
}

// com
var com = Math.floor(Math.random() * 10) + 1;
console.log(com);

// program

  var result = "";

  if (p == com) {
    result = "BENAR";
  } else if (p >= com) {
    result = "Angka yang kamu masukkan terlalu besar";
  } else if (p <= com) {
    result = "Angka yang kamu masukkan terlalu kecil";
  } else {
    result = "NGACO";
  }

  alert("Kamu masukan: " + p + "\nHasilnya adalah: " + result);

  tebakan++;

  ulang = confirm("Ulang?");
}
