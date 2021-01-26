var btnRome = document.getElementById('rome');
var btnGreece  = document.getElementById('greece');
var Rome = document.getElementById('rome');
var Greece  = document.getElementById('greece');

btnRome.addEventListener('click', function(){
  Rome.className = ''; 
  Greece.className = 'hidden';
});

btnGreece.addEventListener('click', function(){
  Rome.className = '';
  Greece.className = 'hidden';
});
