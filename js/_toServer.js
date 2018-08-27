// Здесь описывается скрипт работы с сервером: прямая/обратная конвертцация обьектов в JSON-формат и отправка/запрос строки JSON
var textbox;
function MakeJSON() {
	console.log("Привет!");
	textbox = JSON.stringify(sat); // тут запихиваем нашу JSON-строку
	console.log(textbox);
}

/*
function objectSaver() {
	var textFile = null,
	makeTextFile = function(text) {
			var data = new Blob([text], {type: 'text/plain'});
			// If we are replacing a previously generated file we need to
			// manually revoke the object URL to avoid memory leaks.
			if (textFile !== null) {window.URL.revokeObjectURL(textFile);}
			textFile = window.URL.createObjectURL(data);
			return textFile;
		};
	var create = document.getElementById('saveObjectServer'),
	create.addEventListener('click',MakeLink(), false);
	};

 function MakeLink() {var link = document.getElementById('saveLocalMachineButton'); link.href = makeTextFile(textbox.value);}
/*
// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();
// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'phones.json', false);
// 3. Отсылаем запрос
xhr.send();
// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
}
function objectSendedServer(){
}
*/