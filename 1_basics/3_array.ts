// dizin veir 5tipini tanımlarken
// dizinin içerisndeki elemaların tipini söyleriz
const students: string[] = ['ahmet', 'mehmet', 'ayşe'];

// bütün dizi methodları dizinin tipini dikkate alır
students.push('ali');
students.push('10');

const ages: number[] = [12, 45, 56, 687, 78];

const licences: boolean[] = [true, false, true];

// normdal dizini tek bir veritipinden oluşmasını bekliyoruz
// bazı duyrumlarda birden fazla farklı veritipnden oluşabilir
// union type kullanrak "ya bu type olsun ya bu type" |

const teachers: (string | null | number)[] = [
  'uğur',
  null,
  'ahmet',
  null,
  'ali',
  50,
];
