function hitung() {
  let angkaPertama = parseFloat(document.getElementById("angka1").value);
  let angkaKedua = parseFloat(document.getElementById("angka2").value);

  let operator = document.getElementById("operator").value;
  let hasil;

  if (operator == "tambah") {
    hasil = angkaPertama + angkaKedua;
  } else if (operator == "kurang") {
    hasil = angkaPertama - angkaKedua;
  } else if (operator == "kali") {
    hasil = angkaPertama * angkaKedua;
  } else {
    hasil = angkaPertama / angkaKedua;
  }
  document.getElementById("hasil").value = hasil;
}
