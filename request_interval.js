let http = new XMLHttpRequest();
let time_between = 10; // время между запросами
let url = 'https://ya.ru'; // время между запросами

setTimeout(function run() {

  http.onreadystatechange = function() {

    if (this.readyState === 4 && this.status === 200) {

      console.log(http.responseText); // ответ в консоль

      if (parseInt(http.responseText) > 0) { // если отвечает, продолжим

        setTimeout(run, time_between);

      } else {

        console.log('Финиш!!');

      }
    }

  };

  http.open('GET', url, true);
  http.send();

}, time_between);
