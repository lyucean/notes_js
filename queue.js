// Частенько нужно организовать очередь,
// для последовательного вызова функций.

function Queue() {
  this.q = [];
  // Добавляет вызов в очередь
  this.add = function(foo, scope, attr){
    q.push(Array.prototype.slice.call(arguments));
  }
  // Проигрывает очередь
  this.next = function() {
    if (!this.q.length) return;
    let opts = this.q.shift();
    if (opts.length = 1) return opts[0]();
    return opts[0].apply(opts[1], opts[2]||[]);
  }
}

// Создаем экземпляр очереди
let q = new Queue();
// Функция, имитирующая анимацию с задержкой в 1 сек
let animaton = function(){
  console.log('очень много анимации');
  setTimeout(function(){
    q.next(); // Крутим очередь дальше
  }, 1000);
}

animation();
q.add(animation);
q.add(animation);
q.add(animation);
q.add(animation);
q.add(animation);
q.add(animation);
q.add(animation);
q.add(animation);
q.add(animation);
