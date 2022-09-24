var total_others, total_sheep;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


total_others = 0;

total_sheep = 0;


document.getElementById('button').addEventListener('click', (event) => {
  let element_sheep_count = document.getElementById('sheep_count');
  element_sheep_count.innerText = total_sheep;
  if (getNumberOrString(document.getElementById('text').value) == 'sheep') {
    total_sheep = (typeof total_sheep === 'number' ? total_sheep : 0) + 1;
  } else {
    let element_other_count = document.getElementById('other_count');
    element_other_count.innerText = total_others;
    total_others = (typeof total_others === 'number' ? total_others : 0) + 1;
  }

});

});
const console = document.getElementById("tests");
prettify.toHTML(run(), console);
