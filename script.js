// JavaScript Sample

// 1 body の背景色を変える
function MyFunction01() {
  var obj = document.body;
  obj.style.backgroundColor = 'red';
}



//2  ID要素の背景色を変える
function MyFunction02(){
  var obj = document.getElementById('ID01');
  obj.style.backgroundColor = 'yellow';
}




//3  CLASS要素の背景色を変える
function MyFunction03(){

    // Class01の把握（情報が line[0], line[1] ,line[2]・・に一括で入る）
    var lines = document.getElementsByClassName('Class01');

    //  i 番目の pタグ部分の背景を green に
    for( var i=0; i<lines.length; i++ ){
          lines[i].style.backgroundColor = 'green';
    }
}



//32  CLASS要素の背景色を変える
function MyFunction032(){

    // Class01の把握（情報が line[0], line[1] ,line[2]・・に一括で入る）
    var lines = document.getElementsByClassName('Class02');

    // Class01の把握（情報が line[0], line[1] ,line[2]・・に一括で入る）
     var lines = document.getElementsByClassName('Class02');
     //  i 番目の pタグ部分の背景を green に
     for( var i=0; i<lines.length; i++ ){
           lines[i].style.backgroundColor = 'green';
     }
   }




    //4  HTML要素の背景色を変える
    function MyFunction04() {
      // pタグの把握（複数の情報が obj[0], obj[1] ,obj[2]・・に一括で入る）
      var obj = document.getElementsByTagName("p");

      // pタグの存在する数だけ処理をくりかえす
      for( var i=0; i<obj.length; i++ ) {
           //  i 番目の pタグ部分の背景を blue に
          obj[ i ].style.backgroundColor = "blue";
      }
    }




    //5 引数を用いた背景色の変更
function MyFunction05( col ){
  var obj = document.body;
  obj.style.backgroundColor = col;
}


//ランダムな16進6桁のカラーコードを生成（汎用性のある関数）
function RandomColor(){
    var col = Math.floor( Math.random() * 0xFFFFFF ).toString(16);
    for( var i = col.length; i<6; i++ ) { col = '0' + col; }
    return '#' + col;
}




//6 背景色の変更
function MyFunction06( ){
  var obj = document.body;
  obj.style.backgroundColor = RandomColor();
}




//7  外部変数の宣言・定義（以下２つの関数で共通して利用）
var scale = 100;

// 文字を拡大する関数
function enlarge(){
   scale *= 1.25;  // scale = scale * 1.25 と同義（現在のscaleを1.25倍）
   var obj = document.getElementById('ID07');
   obj.style.fontSize = scale + '%';
}

//文字を縮小する関数
function reduce(){
   scale /= 1.25;  // 現在のscaleを1.25で割る
   var obj = document.getElementById('ID07');
   obj.style.fontSize = scale + '%';
}




//8 ユーザー入力でターゲット要素の背景色を変更
function ChangeBGColor() {
  var obj = document.getElementById('ID08'); // ターゲット要素
  var col = document.getElementById('COL'); // 入力
  obj.style.backgroundColor = col.value;
}




//9  ユーザー入力でターゲット要素の文字列を変更
function ChangeContent(){
    var m = document.getElementById('ID09'); // ターゲット要素
    var n = document.getElementById('NAME'); // 入力
    var res = 'こんにちは <b>' + n.value + '</b> さん';
    m.innerHTML = res;
}





//10  ２つの値を掛け算するプログラム
function Calc01() {
    var ans = document.getElementById('ANS'); // ターゲット要素
    var x = document.getElementById('X'); // 入力１
    var y = document.getElementById('Y'); // 入力２
    ans.value =Number( x.value ) * Number( y.value );
}




//11 総和を求めるプログラム
function Calc02() {
  var s = 0;
  var xs = Number(XS.value);
  var xe = Number(XE.value);

  // 変数 s に順次値を足し込む
  for(var i=xs; i<=xe; i++){
    s = s + i;
  }
  ANS2.value = s;
}




//12 クリックイベントに反応するイベントリスナーを定義
window.onload = function() {
    var btn = document.getElementById('CALC03');
    btn.addEventListener('click', Calc03, false);
}
// イベントハンドラー
function Calc03() {
    var ans = document.getElementById('ANS3');
    var x = document.getElementById('X3');
    var y = document.getElementById('Y3');
    ans.value =Number( x.value ) * Number( y.value );
}
