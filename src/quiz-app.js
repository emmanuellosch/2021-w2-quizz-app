console.clear();

/*

const button = document.querySelector('#button');
const answer = document.querySelector('#answer1');

button.addEventListener('click', () => {
answer.classList.toggle('hidden');
});

*/

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => 
    button.addEventListener('click', () => {
        const answer = button.parentNode.querySelector('.answer');
        answer.classList.toggle('hidden');
        button.innerText = answer.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
    })) 

const bookmark = document.querySelectorAll('.bookmark');

bookmark.forEach(bookmark =>
    bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('fas')
    bookmark.classList.toggle('active')
    }))

const submit =document.querySelector('#submit');

submit.addEventListener('touchstart', function(){}, true);

 





