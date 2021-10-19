
const addbtn = document.querySelector('.add')
const bookSection = document.querySelector('.book-section')
const bookInput = document.querySelector('.add')
const authorInput = document.getElementById('Author')
const titleInput = document.getElementById('Title')


function getLocalStorage() {
    return localStorage.getItem('bookar') ? JSON.parse(localStorage.getItem('bookar')) : [];
  }
  

  function filterbookhtml(allbook,index) {
    allbook.splice(index,1)
 
    displayBooks(allbook)
 }

const displayBooks = (bookoutput) => {
  
   const allbook = bookoutput.map((book) =>
        `<div class="author-title">
    <p>${book.author}</p>
    <p>${book.title}</p>
    <button type="button"  class="remove" class="btn">remove</button>
    <hr>
</div>`  
    );
   
    bookSection.innerHTML=allbook.join('')

    const removebtn = document.querySelectorAll('.remove')
 
    removebtn.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
           deleteBookStorage(index)
           filterbookhtml(bookoutput,index)
        })

        
    })
    function deleteBookStorage(index){
       
        filteredbook= bookoutput.filter(indext=> indext !== bookoutput[index])
        localStorage.setItem('bookar', JSON.stringify(filteredbook));
      
    }

    authorInput.value=''
    titleInput.value=''
}


window.addEventListener('DOMContentLoaded',()=>{
displayBooks(getLocalStorage())
})

bookInput.addEventListener('click',(e)=>{
    e.preventDefault()
    
    const bookinfo = {
        author: authorInput.value,
        title: titleInput.value
    }
   
    let bookar= getLocalStorage()
         bookar.push(bookinfo)
        localStorage.setItem('bookar', JSON.stringify(bookar));
        
        displayBooks(getLocalStorage())
   
})




