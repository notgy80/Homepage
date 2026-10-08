document.querySelectorAll('.expandable').forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('expanded');
    });
});
