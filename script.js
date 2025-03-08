document.getElementById('surpriseBtn').addEventListener('click', function() {
    const message = document.getElementById('surpriseMessage');
    message.classList.remove('hidden');
    this.style.display = 'none'; // Hide the button after click
});
