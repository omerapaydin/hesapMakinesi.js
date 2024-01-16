const input1 = document.querySelector("#number1");
const input2 = document.querySelector("#number2");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

const sonuc = document.querySelector("#sonuc");

button1.addEventListener("click", () => {
  const hesapla = new Hesap(input1.value, input2.value);
  let sonucs = hesapla.toplama();
  sonuc.innerText = " " + sonucs;
});
button2.addEventListener("click", () => {
  const hesapla = new Hesap(input1.value, input2.value);
  let sonucs = hesapla.cikarma();
  sonuc.innerText = " " + sonucs;
});
button3.addEventListener("click", () => {
  const hesapla = new Hesap(input1.value, input2.value);
  let sonucs = hesapla.carpma();
  sonuc.innerText = " " + sonucs;
});
button4.addEventListener("click", () => {
  const hesapla = new Hesap(input1.value, input2.value);
  let sonucs = hesapla.bolme();
  sonuc.innerText = " " + sonucs;
});
