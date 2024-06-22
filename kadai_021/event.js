//textというidを持つHTML要素を取得し、定数に代入する
const text=document.getElementById('text');

//btnというidを持つHTML要素を崇徳し、定数に代入する
const btn=document.getElementById('btn');

//HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click',()=>{
  //2秒後に実行
  setTimeout(()=>{
  //ボタンがクリックされたら書き換えを行う
    text.textContent='ボタンをクリックしました'
  },2000);
});
