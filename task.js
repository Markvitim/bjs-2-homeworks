class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = type;
  }

  fix() {
    let fix = this.state * 1.5;
    this.state = fix;
    return this.state;
  }

  set state(number) {
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, type = null) {
    super(name, releaseDate, pagesCount, (type = null));
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, type = null) {
    super(name, releaseDate, pagesCount, (type = null));
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, type = null) {
    super(author, name, releaseDate, pagesCount, (type = null));
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, type = null) {
    super(author, name, releaseDate, pagesCount, (type = null));
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, type = null) {
    super(author, name, releaseDate, pagesCount, (type = null));
    this.type = "detective";
  }
}
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }
  giveBookByName(bookName) {
    for (let i in this.books) {
      if (this.books[i].name == bookName) {
        let removed = this.books.splice(i, 1);
        return removed[0];
      }
    }
    return null;
  }
}

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100
sherlock.setState = 115;
console.log(sherlock.setState);

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);
const agata = new DetectiveBook("Агата Кристи", "Десять негритят", 2019, 1008);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new Magazine("Математика ЕГЭ 2017", 2017, 128));
library.addBook(
  new NovelBook("Габор Матэ", "Когда тело говорит нет", 1919, 496)
);
library.addBook(
  new FantasticBook("Е.С. Музланова", "Английский язык", 2017, 191)
);
library.addBook(new DetectiveBook("Пазин Р.В.", "Обществознание", 2016, 411));
console.log(library.findBookBy("releaseDate", 1919).name);
library.giveBookByName("Математика ЕГЭ 2017");
console.log("Количество книг после выдачи: " + library.books.length);
const messUp = new NovelBook("Габор Матэ", "Когда тело говорит нет", 1919, 496);
messUp.setState = 70;
console.log(messUp.fix());
library.addBook(messUp);
console.log("Количество книг после возврата: " + library.books.length);
