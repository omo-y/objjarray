// function func1(str) {
//   return str;
// }
// console.log(func1("合格"));

// function func11() {
//   return "合格１";
// }
// console.log(func11());

// function func2(a, b) {
//   return a * b;
// }
// console.log(func2(10, 6));

// function func3(str1, str2, str3) {
//   return str1 + str2 + str3;
// }
// console.log(func4("合", "格", "した"));

// //テンプレート文字列使用
// function func4(str1, str2, str3) {
//   return `${str1}${str2}${str3}`;
// }
// console.log(func4("合", "格", "したよ"));

// //アロー関数
// const func10 = (str) => str;
// console.log(func10("合格2"));

// //アロー関数その2
// const func110 = () => "合格110";
// console.log(func110());

// //アロー関数その3
// const func22 = (a, b) => a * b;
// console.log(func22(20, 50));

// //アロー関数その3
// const func33 = (str1, str2, str3) => `${str1}${str2}${str3}`;
// console.log(func33("合", "格", "したで"));

//オブジェクトの分割代入
const myProfile={
  name:"点",
  age:61,
}
const message =`私の名前は${myProfile.name}だ。年は${myProfile.age}だ。`
console.log(message);

const {name,age}=myProfile;
const message1 =`私の名前は${name}だ。年の2倍は${age*2}だ。`
console.log(message1);

//配列のの分割代入
const myprofile10 =["影",19];

const message10=`名前は、${myprofile10.[0]}で年は${myprofile10[1]}です。`;
console.log(message10);

const [name1,age1]=myprofile10;
const message20=`名前は、${name1}で年は${age1+1}です。`;
console.log(message20);

//配列例
console.log("配列の基礎");
//
console.log("配列の作成");
let fruits = ['りんご', 'バナナ']

console.log(fruits.length)
// 2
console.log("位置を使用して配列にアクセスする");
let first = fruits[0]
// りんご
console.log(fruits[0]);
let last = fruits[fruits.length - 1]
// バナナ
console.log(fruits[fruits.length-1]);
const msg="配列のループ処理";
console.log(msg);
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// りんご 0
// バナナ 1
fruits.forEach((item, index, array)=>{
  console.log(item, index)
})
// りんご 0
// バナナ 1
let newLength = fruits.push('みかん')
// ["りんご", "バナナ", "みかん"]
fruits.forEach((item, index, array)=>{
  console.log(item, index)
})
let last1 = fruits.pop() 
// 配列の末尾の要素 "みかん" を削除
// ["りんご", "バナナ"]
fruits.forEach((item, index, array)=>{
  console.log(item, index)
})
let first1 = fruits.shift() // 配列の先頭の要素"りんご" を削除
// ["バナナ"]
fruits.forEach((item, index, array)=>{
  console.log(item, index)
})
let newLength1 = fruits.unshift('いちご') // 配列の先頭に追加
// ["いちご", "バナナ"]
fruits.forEach((item, index, array)=>{
  console.log(item, index)
})
//要素の添字を取得する
fruits.push('マンゴー')
// ["いちご", "バナナ", "マンゴー"]

let pos = fruits.indexOf('バナナ')
// 1
fruits.forEach((item, index, array)=>{
  console.log(item, index)
})
//位置を指定して要素を削除する
let removedItem = fruits.splice(pos, 1) // 要素を削除する方法
// ["いちご", "マンゴー"]
fruits.forEach((item, index, array)=>{
  console.log(item, index)
})
//位置から複数の要素を削除する
let vegetables = ['キャベツ', 'かぶ', '大根', 'にんじん']
//console.log(vegetables)
// ["キャベツ", "かぶ", "大根", "にんじん"]
vegetables.forEach((item, index, array)=>{
  console.log(item, index)
})

let pos1 = 1
let n = 2

let removedItems = vegetables.splice(pos1, n)
// 複数の要素を削除するには、 n で削除する要素数を定義します
// 指定位置（pos）以降から n 個分の要素が削除されます

console.log(vegetables)
// ["Cabbage", "Carrot"] (元の配列が変化)

console.log(removedItems)
// ["Turnip", "Radish"]

//配列をコピーする
let shallowCopy = fruits.slice() // 配列のコピーを作成できます
// ["いちご", "マンゴー"]
shallowCopy.forEach((item, index, array)=>{
  console.log(item, index)
})
//デフォルト値
const sayHallo = (name) => console.log(`こんにちは${name}さん。`)
sayHallo("影");
//初期値
const sayHallo1 = (name="ゲスト") => console.log(`こんにちは${name}さん。`)
sayHallo1();
