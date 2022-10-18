const books = document.querySelectorAll('.book');
const body = document.getElementsByTagName('body')[0];

const book2 = books[0]; //книга 2
const book1 = books[1]; //книга 1
const book6 = books[2]; //книга 6
const book4 = books[3]; //книга 4
const book3 = books[4]; //книга 3
const book5 = books[5]; //книга 5

const bookName3 = book3.querySelector('h2 a');
const chapter2 = book2.querySelectorAll('ul li');
const chapter5 = book5.querySelectorAll('ul li');
const elem = document.createElement('li');
const chapter6 = book6.querySelectorAll('ul li');

//восстановить порядок книг
book6.before(book2);
book2.after(book3);
book4.after(book6);
book5.after(book6);

//фоновое изображение 
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg';

//заменить заголовок книги 3
bookName3.innerHTML = 'Книга 3. this и <strong>Прототипы</strong> Объектов'; 

//удаление рекламы
document.querySelector('.adv').remove();

//порядок глав во второй книге
chapter2[3].after(chapter2[6]); 
chapter2[4].after(chapter2[8]);
chapter2[10].before(chapter2[2]);
chapter2[4].before(chapter2[8]);

//порядок глав в пятой книге
chapter5[1].after(chapter5[9]);
chapter5[9].after(chapter5[3]); 
chapter5[3].after(chapter5[4]); 
chapter5[8].before(chapter5[5]); 

//добавление 8-й главы в шестую книгу
elem.classList.add("chapter");
elem.textContent = 'Глава 8: За пределами ES6';
console.log(elem);

chapter6[8].append(elem); 