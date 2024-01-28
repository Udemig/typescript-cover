/*
* Typescript , js'İn bazı önemli açıklarını düzeltmek
* için microsoft tarafında geliştirlmiş bir programalama dil
 
* * Js'de tanımalan bir değişkene her türde değer ataması yapılabilir
* * Js'de otomatik tamamlama özelliği yok
* * Js'de kodu çalıştırmadan hataları göremiyoruz


* * Typescript kodları doğrudan çalıştırlamazlar.
* * Yazılan ts kodunu js koduna derlemeliyiz.

* * TSC: Typescript Complier;
* * Yazılan ts kodunu js'e çevirir.

*/
// 1) tip  koruması
var user = 'ahmet';
user = 'mehmet';
// user = 50;
// 2) otomatik tamamlama
var teacher = {
    name: 'ali',
    age: 30,
};
teacher.name;
teacher.age;
console.log(teacher.name);
