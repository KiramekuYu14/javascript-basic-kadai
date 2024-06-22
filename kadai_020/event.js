//textというidを持つHTML要素を取得し、定数を代入する
const text=document.getElementById('text');
//btnというidを持つHTML要素を取得し、定数に代入する
const btn=document.getElementById('btn');

//HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click',()=>{
  //作成したh2要素をクリックされたら、書き換えを行う
  text.textContent='ボタンをクリックしました';
});