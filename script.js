// JavaScript Sample

// body の背景色を変える
function MyFunction01() {
  var obj = document.body;
  obj.style.backgroundColor = 'red';
}

// ID要素の背景色を変える
function MyFunction02(){
  var obj = document.getElementById('ID01');
  obj.style.backgroundColor = 'yellow';
}

// CLASS要素の背景色を変える
function MyFunction03(){

    // Class01の把握（情報が line[0], line[1] ,line[2]・・に一括で入る）
    var lines = document.getElementsByClassName('Class01');

    //  i 番目の pタグ部分の背景を green に
    for( var i=0; i<lines.length; i++ ){
          lines[i].style.backgroundColor = 'green';
    }
}


// CLASS要素の背景色を変える
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

    // HTML要素の背景色を変える
    function MyFunction04() {
      // pタグの把握（複数の情報が obj[0], obj[1] ,obj[2]・・に一括で入る）
      var obj = document.getElementsByTagName("p");

      // pタグの存在する数だけ処理をくりかえす
      for( var i=0; i<obj.length; i++ ) {
           //  i 番目の pタグ部分の背景を blue に
          obj[ i ].style.backgroundColor = "blue";
      }
    }