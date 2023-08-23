var tanya = "true"
while(tanya){

    // cari tau si player milih apa
    var p = prompt("Pilih: Batu, Gunting atau Kertas");

    // tangkap pilihan komputer
    // generate bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
    comp = "Batu";
    } else if (comp >= 0.34 && comp < 0.67) {
    comp = "Gunting";
    } else {
    comp = "Kertas";
    }

    console.log(comp);

    // tentukan rules

    var hasil = ''

    if (p == comp){
        hasil = "Seri"
    } else if ( p == "Batu"){
        if(comp == "Gunting"){
            hasil = "Kamu Menang"
        } else if(comp == "Kertas" ){
            hasil = "Kamu Kalah"
        }
    } else if ( p == "Gunting"){
        if(comp == "Batu"){
            hasil = "Kamu Kalah "
        } else if(comp == "Kertas" ){
            hasil = "Kamu Menang"
        }
    } else if ( p == "Kertas"){
        if(comp == "Gunting"){
            hasil = "Kamu Kalah"
        } else if(comp == "Batu" ){
            hasil = "Kamu Menang"
        }
    } else{
        hasil = "Error!"
    }

    // bisa juga rules pakai
    /*
    if(p == "Batu"){
        hasil = ( comp == "Gunting") ? 'Kamu Menang' : 'Kamu Kalah'
    }
    */

    // tampilkan hasil
    alert("Kamu pilih: " + p + " Komputer pilih: " + comp + "\nMaka : " + hasil)

    tanya = confirm('Ulang?')
}

alert("Makasih udah main")