//! Taban ve yükselik parametre olarak alınarak üçgen alanı hesaplayacağız.

const t = prompt('Taban değerini giriniz: ');
const h = prompt('Yükseklik değerini giriniz: ');

const alan = ucgenAlaniHesapla(t, h);
alert(`UCGEN ALANI HESAPLA:${alan}`);

function ucgenAlaniHesapla(t, h) {
    return (t*h) / 2;
}

//! kare, küp ve üs alma yapacağız.

const kareAl = (n) => n*n;
const kupAl = (n) => n*n*n;
const usAl = (t, u) => t**u;

console.log('Kare :', kareAl(3));
console.log('Kup :', kupAl(3));
console.log('Us :', usAl(3, 5));

//! Artık yıl  hesaplayacağız

const artikYilMi = (yil) => {
    sonuc = (yil % 4 == 0 && yil % 100 == 0 != 0)  || yil %400 == 0;
    return sonuc ? `${yil} artik yildir` : `${yil} artik yil değildir`;
};

console.log(artikYilMi(2000));
console.log(artikYilMi(2001));
console.log(artikYilMi(2002));




