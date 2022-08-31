const button1 = document.querySelector("#submit-button");
const button2 = document.querySelector("#reset-button");
const inp = document.querySelector('#inp-box');

button1.addEventListener('click', function(evt){
  const li = document.createElement('li');
  li.textContent = inp.value;
  document.querySelector('ul').appendChild(li);
  inp.value = '';
})


button2.addEventListener('click', function(evt){
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
})

document.querySelector('ul').addEventListener('click', function(evt){
  evt.target.style.color = 'green';
})