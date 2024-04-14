const progress = document.querySelector('#progress')
const progressNumber = document.querySelector('.progress__number')

function increment() {
    progress.value++;
    progressNumber.innerHTML = progress.value;
    if(progress.value == 100) {
        clearInterval(interval)
        setTimeout(() => {
            progress.remove();
            progressNumber.remove();
        },300)
    } 
}

interval = setInterval(increment,50)