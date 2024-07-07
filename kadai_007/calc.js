// 変数numにランダム整数を代入する
let num = Math.floor(Math.random() * 100) + 1; 

// 変数(num)が3と5の倍数か判定
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

// 変数(num)が15の倍数でないときの3の倍数判定
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

// 5の倍数の判定
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

// それ以外の場合
else {
  console.log(num);
}
