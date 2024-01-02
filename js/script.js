let i = 0;
document.getElementById('working_mode').addEventListener('click', function (e){
    if(i % 2 === 0){
        document.getElementById('main_hints').style.display = 'block';
        document.getElementById('new_hints').style.display = 'block';
        document.getElementById('new_hints2').style.display = 'block';
        document.getElementById('working_mode').innerHTML = "Скрыть подробности";
        i++;
    } else{
        document.getElementById('main_hints').style.display = 'none';
        document.getElementById('new_hints').style.display = 'none';
        document.getElementById('new_hints2').style.display = 'none';
        document.getElementById('working_mode').innerHTML = "Сделать подробнее";
        i++;
    }
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
