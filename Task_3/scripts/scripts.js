function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };

function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
            <img src="${item.download_url}" class="card-image"/>
            <p>${item.author}</p>
        </div>
        `;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
}

const resultNode = document.querySelector('.j-result');
const clearBtn = document.querySelector('.j-btn-clear-res')
const input = document.querySelector('input');
const form = document.querySelector('.form');
let url = 'https://picsum.photos/v2/list?limit='

form.addEventListener('submit', (e) => {
  e.preventDefault()
  url += input.value
})

form.addEventListener('submit', () => {
  if (input.value > 0 && input.value < 11) {
    useRequest(url, displayResult);
  } else {
    resultNode.textContent = 'Число вне диапазона от 1 до 10';
  }

  form.reset();
});

clearBtn.addEventListener('click', () => {
  while(resultNode.firstChild) {
    resultNode.removeChild(resultNode.firstChild);
  }
  resultNode.textContent = 'Здесь будет результат запроса';
  url = 'https://picsum.photos/v2/list?limit='
})
