function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log('Hello');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

document.getElementById('startGame')?.addEventListener('click', startGame);