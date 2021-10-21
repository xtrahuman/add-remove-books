const bookSection = document.querySelector('.book-section');
const bookInput = document.querySelector('.form');
const authorInput = document.getElementById('Author');
const titleInput = document.getElementById('Title');
const list = document.getElementById('list-nav')
const addNew = document.getElementById('add-nav')
const contactUs = document.getElementById('contact-nav')
const awesomePage = document.querySelector('.awesome-page');
const formSection = document.querySelector('.form-sect');
const contactSection = document.querySelector('.contact-info');
const newDate = document.querySelector('.new-date')
class Bookinfo {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }

    getLocalStorage = () => (localStorage.getItem('bookar') ? JSON.parse(localStorage.getItem('bookar')) : []);

    FilterBookHtml = (allbook, index) => {
      allbook.splice(index, 1);
      this.displayBooks(allbook);
      localStorage.setItem('bookar', JSON.stringify(allbook));
    };

    displayBooks = (bookoutput) => {
      const allbook = bookoutput.map((book) => `<div class="author-title">
      <div class="d-flex author-title-name">
    <p>${book.author} by ${book.title}</p>
    </div>
    <button type="button"  class="remove btn" >remove</button>
   
</div>`);

      bookSection.innerHTML = allbook.join('');

      const removebtn = document.querySelectorAll('.remove');

      //   function deleteBookStorage(index) {
      //     const filteredbook = bookoutput.filter((indext) => indext !== bookoutput[index]);
      //     localStorage.setItem('bookar', JSON.stringify(filteredbook));
      //   }

      removebtn.forEach((button, index) => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          this.FilterBookHtml(bookoutput, index);
          //   deleteBookStorage(index);
          /* eslint-disable */
   
      /* eslint-enable */
        });
      });

      authorInput.value = '';
      titleInput.value = '';
    };

  // function filterbookhtml(allbook, index) {
  //   allbook.splice(index, 1);

  //   displayBooks(allbook);
  // }
}
window.addEventListener('DOMContentLoaded', () => {
  let Booky = new Bookinfo(authorInput.value, titleInput.value);

  Booky.displayBooks(Booky.getLocalStorage());
  bookInput.addEventListener('submit', () => {
    //   e.preventDefault();

    //   const bookinfo = {
    //     author: authorInput.value,
    //     title: titleInput.value,
    //   };

    Booky = new Bookinfo(authorInput.value, titleInput.value);
    const bookar = Booky.getLocalStorage();
    bookar.push(Booky);
    localStorage.setItem('bookar', JSON.stringify(bookar));

    Booky.displayBooks(Booky.getLocalStorage());
  });
});

const showList = () => {
    awesomePage.classList.remove('close')
    formSection.classList.remove('show')
    contactSection.classList.remove('show')
}

list.addEventListener('click',showList)

const showAddNew = () => {
    awesomePage.classList.add('close')
    formSection.classList.add('show')
    contactSection.classList.remove('show')
}

addNew.addEventListener('click',showAddNew)

const showContact = () => {
    awesomePage.classList.add('close')
    formSection.classList.remove('show')
    contactSection.classList.add('show')
}

contactUs.addEventListener('click',showContact)
const updateDate = () => {
    const today = new Date()
    today.toLocaleString('default', { month: 'long' })
    let month = today.toLocaleString('default', { month: 'long' })
    let date = month +' '+today.getFullYear()+' '+today.getDate();
    let hours = today.getHours()
    let time = hours + ":" + today.getMinutes() + ":" + today.getSeconds();
    let range = hours >= 12 ? 'pm' : 'am';
    let currentDate = date +' '+ time + ' ' +range
    newDate.textContent = currentDate;
    setTimeout(updateDate, 1000);
}


window.addEventListener('DOMContentLoaded', updateDate)



