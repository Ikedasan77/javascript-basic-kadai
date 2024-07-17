// event.js

// ページのDOMが読み込まれた後に実行する関数
document.addEventListener('DOMContentLoaded', function() {
    // ボタン要素を取得
    var button = document.getElementById('btn');
    // テキスト要素を取得
    var textElement = document.getElementById('text');
    
    // ボタンがクリックされたときのイベントリスナーを追加
    button.addEventListener('click', function() {
      // テキストを変更
      textElement.textContent = 'ボタンがクリックされました！';
    });
  });
  