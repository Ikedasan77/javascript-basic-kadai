// ページのDOMが読み込まれた後に実行する関数
document.addEventListener('DOMContentLoaded', function() {
    // ボタン要素を取得
    var button = document.getElementById('btn');
    // テキスト要素を取得
    var textElement = document.getElementById('text');
    
    // ボタンがクリックされたときのイベントリスナーを追加
    button.addEventListener('click', function() {
        // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
        setTimeout(() => {
            textElement.textContent = 'ボタンがクリックされました！（非同期処理）';
        }, 2000);
    });
});
