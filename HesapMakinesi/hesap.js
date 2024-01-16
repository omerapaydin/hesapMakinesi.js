class Hesap {
  constructor(number1, number2) {
    this.number1 = parseInt(number1);
    this.number2 = parseInt(number2);
  }
  toplama() {
    console.log("Toplama Sonucu:", this.number1 + this.number2);
  }
  cikarma() {
    console.log("Çıkarma Sonucu:", this.number1 - this.number2);
  }
  carpma() {
    console.log("Çarpma Sonucu:", this.number1 * this.number2);
  }
  bölme() {
    console.log("Bölme Sonucu:", this.number1 / this.number2);
  }
}
