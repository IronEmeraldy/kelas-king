function tampilForm() {
    let soal = (document.getElementById("soal").value);

    document.querySelectorAll(".form").forEach(f => f.computedStyleMap.display = "none");
    let semuaForm = document.querySelectorAll(".form");
    semuaForm.forEach(f => f.style.display = "none");

    if (soal === "dolar") {
        document.getElementById("form-dolar").style.display = "block";
    }
    else if (soal === "rata") {
        document.getElementById("form-rata").style.display = "block";
    }
    else if (soal === "apel") {
        document.getElementById("form-apel").style.display = "block";
    }
    else if (soal === "waktu") {
        document.getElementById("form-waktu").style.display = "block";
    }
    else if (soal === "diskon") {
        document.getElementById("form-diskon").style.display = "block";
    }
    else if (soal === "ojol") {
        document.getElementById("form-ojol").style.display = "block";
    }
    else if (soal === "bantuan") {
        document.getElementById("form-bantuan").style.display = "block";
    }
    else if (soal === "aritmatika") {
        document.getElementById("form-aritmatika").style.display = "block";
    }
}
document.getElementById("hasil").innerHTML = "";

function hitungDolar() {
    let dolar = parseFloat(document.getElementById("dolar").value);
    const kurs = 16000;

    let rupiah = dolar * kurs;

    document.getElementById("hasil").innerHTML = "Rp. " + rupiah.toLocaleString('id-ID');
}
function hitungRata() {
    let mtk = parseFloat(document.getElementById("mtk").value);
    let ipa = parseFloat(document.getElementById("ipa").value);
    let bindo = parseFloat(document.getElementById("bindo").value);
    let rata = mtk + ipa + bindo;
    let nilai = rata / 3
    let nilaii = nilai.toFixed(2);
    document.getElementById("hasil").innerHTML = "Nilai Matematika adalah " + mtk + "<br>Nilai IPA adalah " + ipa + "<br>Nilai Bahasa Indonesia adalah " + bindo + "<br>Nilai Rata-rata adalah " + nilaii;
}
function hitungApel() {
    let apel = parseFloat(document.getElementById("apel").value);
    let keranjang = parseFloat(document.getElementById("keranjang").value);
    let perkeranjang = Math.floor(apel / keranjang)
    let sisa = apel % keranjang
    document.getElementById("hasil").innerHTML = "Apel setiap keranjang adalah " + perkeranjang + "<br> Sisa bagi nya adalah " + sisa;
}
function hitungWaktu() {
    let jarak = parseFloat(document.getElementById("jarak").value);
    let waktu = parseFloat(document.getElementById("waktu").value);

    let jarak_waktu = jarak / waktu
    document.getElementById("hasil").innerHTML = "Jarak waktu nya adalah " + jarak_waktu + "jam";
}
function hitungDiskon() {
    let harga = parseFloat(document.getElementById("harga").value);
    let diskon = parseFloat(document.getElementById("diskon").value);

    let dis = harga * (diskon / 100)
    let kon = harga - dis
    document.getElementById("hasil").innerHTML = "Harga asli : Rp " + harga + "<br> Diskon nya : " + diskon + "% " + "<br>potongan nya adalah : " + dis + "<br>Harga setelah diskon : Rp" + kon;
}
function hitungOjol() {
    let pesanan = parseInt(document.getElementById("pesanan").value);
    let persen = parseFloat(document.getElementById("persen").value) / 100;
    let usd = parseFloat(document.getElementById("usd").value);
    let kurs = parseFloat(document.getElementById("kurs").value);
    let lokal = parseFloat(document.getElementById("lokal").value);

    let luar = Math.round(pesanan * persen);
    let dalam = pesanan - luar;

    let pendapatanLuar = luar * usd * kurs;
    let pendapatanDalam = dalam * lokal;
    let total = pendapatanLuar + pendapatanDalam;

    let kategori = "";
    if (total < 5000000) {
        kategori = "Solidaritas Rendah";
    } else if (total <= 9999999) {
        kategori = "Sedang";
    } else if (total <= 14999999) {
        kategori = "Tinggi";
    } else {
        kategori = "Viral";
    }

    document.getElementById("hasil").innerHTML =
        "Pesanan Luar Negeri: " + luar + "<br>" +
        "Pesanan Lokal: " + dalam + "<br>" +
        "Pendapatan Luar Negeri: Rp" + pendapatanLuar.toLocaleString() + "<br>" +
        "Pendapatan Lokal: Rp" + pendapatanDalam.toLocaleString() + "<br>" +
        "<b>Total Pendapatan: Rp" + total.toLocaleString() + "</b><br>" +
        "Kategori: <b>" + kategori + "</b>";
}
function hitungBantuan() {
    var keluargaTerdampak = parseInt(document.getElementById("keluargaTerdampak").value);
    var kebutuhanPerKeluarga = parseInt(document.getElementById("kebutuhanPerKeluarga").value);
    var jumlahPaketLogistik = parseInt(document.getElementById("jumlahPaketLogistik").value);

    var nilaiPaketLogistik = 250000;
    var totalBantuan = jumlahPaketLogistik * nilaiPaketLogistik;

    var totalKebutuhan = keluargaTerdampak * kebutuhanPerKeluarga;

    var persentaseKecukupan = (totalBantuan / totalKebutuhan) * 100;

    var kategori = "";
    if (persentaseKecukupan < 50) {
        kategori = "Sangat Kurang";
    } else if (persentaseKecukupan >= 50 && persentaseKecukupan <= 74) {
        kategori = "Kurang";
    } else if (persentaseKecukupan >= 75 && persentaseKecukupan <= 99) {
        kategori = "Hampir Cukup";
    } else if (persentaseKecukupan == 100) {
        kategori = "Cukup";
    } else {
        kategori = "Berlebih";
    }

    document.getElementById("hasil").innerHTML = "Total Bantuan: Rp " + totalBantuan.toLocaleString() + "<br>" +
        "Total Kebutuhan: Rp " + totalKebutuhan.toLocaleString() + "<br>" +
        "Persentase Kecukupan: " + persentaseKecukupan.toFixed(2) + "%<br>" +
        "Kategori: " + kategori;
}

function hitung() {
    let x = parseFloat(document.getElementById("nilaix").value);
    let y = parseFloat(document.getElementById("nilaiy").value);

    let z = x + y;

    document.getElementById("hasil").innerHTML = "Hasil penjumlahan : " + z;
}
function kurang() {
    let x = parseFloat(document.getElementById("nilaix").value);
    let y = parseFloat(document.getElementById("nilaiy").value);

    let z = x - y;

    document.getElementById("hasil").innerHTML = "Hasil pengurangan : " + z;
}
function kali() {
    let x = parseFloat(document.getElementById("nilaix").value);
    let y = parseFloat(document.getElementById("nilaiy").value);

    let z = x * y;

    document.getElementById("hasil").innerHTML = "Hasil perkalian : " + z;
}
function bagi() {
    let x = parseFloat(document.getElementById("nilaix").value);
    let y = parseFloat(document.getElementById("nilaiy").value);

    let z = x / y;

    document.getElementById("hasil").innerHTML = "Hasil pembagian : " + z;
}
function sisa() {
    let x = parseFloat(document.getElementById("nilaix").value);
    let y = parseFloat(document.getElementById("nilaiy").value);

    let z = x % y;

    document.getElementById("hasil").innerHTML = "Hasil sisa bagi : " + z;
}
function resetForm() {
    document.querySelectorAll(".form input").forEach(input => {
        input.value = "";
    });
    document.getElementById("hasil").innerHTML = "";
}