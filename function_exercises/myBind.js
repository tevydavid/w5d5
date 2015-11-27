Function.prototype.myBind = function (context) {
  var fn = this;
  return function() {
    fn.apply(context);
  };
};



function Cat(name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  console.log(this.name + ' goes meow');
};

var cat = new Cat('markov');
cat.meow();

var dog = {
  name: 'sofie'
};

var dogBark = cat.meow.myBind(dog);
dogBark();
