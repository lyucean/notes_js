// Частенько нужно организовать очередь,
// для последовательного вызова функций.

function Queue() {
  this._q = []; // массив с функциями

  // Добавляет вызов в очередь
  this.add = function(foo, scope, attr) {
    this._q.push(Array.prototype.slice.call(arguments)); // копируем с окружением
  };

  // Проигрывает очередь
  this.next = function() {

    if (!this._q.length) { // Если больше нет
      return;
    }

    let opts = this._q.shift(); // берём первый элемент

    if (opts.length === 1) { // если функция без аргументов
      return opts[0]();
    }

    return opts[0].apply(opts[1], opts[2] || []); // если с аргументами
  };
}

// Создаем экземпляр очереди
let q = new Queue();
let count = 0;
// Функция, имитирующая анимацию с задержкой в 1 сек
let animation = function() {
  console.log('очень много анимации ' + count++);
  setTimeout(function() {
    q.next(); // Крутим очередь дальше
  }, 1000);
};

animation();
q.add(animation);
q.add(animation);
