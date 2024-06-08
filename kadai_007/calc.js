//変数numに１以上の整数を代入する
let num = Math.floor(Math.random()*100)+1;

//変数numの値を出力（確認用）
console.log(num);

//変数が３と5の倍数の場合　「３と5の倍数です」を出力
if(num%15===0){
  console.log('3と5の倍数です');
}

//変数が3の倍数の場合　「3の倍数です」を出力　
else if(num%3===0){
  console.log('3の倍数です');
}

//変数が5の倍数の場合　「5の倍数です」を出力
else if(num%5===0){
  console.log('5の倍数です');
}


//それ以外の場合　変数を出力する
else{
  console.log(num);
}