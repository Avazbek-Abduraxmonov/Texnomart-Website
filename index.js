document.querySelector('.center input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        alert(`Qidirish: ${this.value}`);
    }
});
