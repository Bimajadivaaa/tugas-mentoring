function hitung() {
  var angkaPertama = parseFloat(document.getElementById("angka1").value);
  var angkaKedua = parseFloat(document.getElementById("angka2").value);

  var operator = document.getElementById("operator").value;
  var hasil;

  if (operator == "tambah") {
    hasil = angkaPertama + angkaKedua;
  } else if (operator == "kurang") {
    hasil = angkaPertama - angkaKedua;
  } else if (operator == "kali") {
    hasil = angkaPertama * angkaKedua;
  } else if (operator == "bagi") {
    hasil = angkaPertama / angkaKedua;
  }

  document.getElementById("hasil").value = hasil;
}
