var fruits;


fruits = ['orange', 'mango', 'banana'];


document.getElementById('button').addEventListener('click', (event) => {
  if (!!fruits.length) {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = fruits.shift();

    element_list.appendChild(new_li);
  }

});
