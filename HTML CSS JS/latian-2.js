const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum
const getMax = (a, b, c) => {
  if(a>b && a>c) {
    return a;
  }else if (b>a && b>c){
    return b;
  }else {
    return c;
  }
};

// Cetak "Nilai maksimum adalah __"
console.log("Nilai maksimum adalah "+ getMax(number1, number2, number3));
