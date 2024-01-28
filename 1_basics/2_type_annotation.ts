/*
 * Type Annotation:
 * Javascript'de değişkenin türnün belirlemek için biz özellik yoktur;
 * Typescripte'de tanımlanan değişkenlerin tiplerini belirleyebiliyoruz
 */

let surname: string = 'yıldız';

surname = 'demir';
// surname = {}

let age: number = 60;
age = 30;
// age = 'kırk';

/*
 * JS Veri Tipleri
 * string
 * number
 * boolean
 * null
 * undefined
 * object
 * * array
 * * function
 * symbol (pek kullanılmaz)
 * bigint (pek kullanılmaz)
 */

let name2: string = 'mehmet';

let age2: number = 40;

let has_licence: boolean = true;

let student: object = {
  id: '1',
  name: 'ahmet',
  is_graduated: false,
};

let value: null = null;

let another_value: undefined;
