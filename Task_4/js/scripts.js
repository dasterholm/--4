function useFetch(url) {
  return fetch(url)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .catch(() => {
        console.log('error')
  })
};

function displayResult(url) {
    const imgage = `<img src='${url}' alt='image'>`;
    resultNode.innerHTML = imgage;
}

function inputCheck(value_1, value_2) {
    if (value_1 > 99 && value_1 < 301) {
        if (value_2 > 99 && value_2 < 301) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    } 
}

const resultNode = document.querySelector('.j-result');
const clearBtn = document.querySelector('.j-btn-clear-res')
const input_1 = document.getElementById('input_1')
const input_2 = document.getElementById('input_2')
const form = document.querySelector('.form');
let url = 'https://picsum.photos/'

form.addEventListener('submit', (e) => {
  e.preventDefault();
  url = url + input_1.value + "/" + input_2.value;
  console.log(url);
})

form.addEventListener('submit', async () => {
  if (inputCheck(input_1.value, input_2.value)) {
    let imageUrl = await useFetch(url);
    displayResult(imageUrl)
    
  } else {
    resultNode.textContent = 'Одно из чисел вне диапазона от 100 до 300';
  }
  form.reset();
});

clearBtn.addEventListener('click', () => {
  while(resultNode.firstChild) {
    resultNode.removeChild(resultNode.firstChild);
  }
  resultNode.textContent = 'Здесь будет результат запроса';
  url = 'https://picsum.photos/'
})