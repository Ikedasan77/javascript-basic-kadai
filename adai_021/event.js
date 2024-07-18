document.addEventListener('DOMContentLoaded', function() {
    
    var button = document.getElementById('btn');
    
    var textElement = document.getElementById('text');
    
    button.addEventListener('click', function() {
    
    setTimeout(() => {
    textElement.textContent = 'ボタンがクリックされました！';
    }, 2000);
    });
});
