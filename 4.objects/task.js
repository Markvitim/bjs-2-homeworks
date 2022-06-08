function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student("Anna", "female", 19);
const student2 = new Student("Boris", "male", 21);
const student3 = new Student("Galina", "female", 25);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark]
  }
  // добавить первую оценку 
  else {
    this.marks.push(mark)
    // добавить вторую и последующие оценки в массив
  }
}
Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = [...mark]
  } else {
    this.marks.push(...mark)
  }
}

Student.prototype.getAverage = function () {
  const initialValue = 0;
  let sumWithInitial = this.marks.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumWithInitial / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.mark;
  this.excluded = reason;
}

// ваш код для остальных методов