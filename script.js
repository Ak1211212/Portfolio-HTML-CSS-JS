document.getElementById('experience-btn').addEventListener('click', function() {
    document.getElementById('main-content').classList.add('hide');
    setTimeout(function() {
        document.getElementById('main-content').style.display = 'none';
        document.getElementById('experience-content').style.display = 'flex';
    }, 1000);
    document.getElementById('experience-content').classList.add('show');
});

document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('experience-content').classList.remove('show');
    setTimeout(function() {
        document.getElementById('experience-content').style.display = 'none';
        document.getElementById('main-content').style.display = 'flex';
    }, 1000);
    document.getElementById('main-content').classList.remove('hide');
});
