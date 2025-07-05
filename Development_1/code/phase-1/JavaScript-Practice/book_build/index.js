const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" }
];

const searchInput=document.getElementById("search");
const list=document.getElementById("book-list");
const pElem=document.getElementById("no-results");
const clearBtn=document.getElementById("clear-btn")

const newBooksArray=[...books];

function displayBooks(array){
    list.innerHTML="";
    array.forEach(book=>{
        const li=document.createElement("li");
        li.textContent=book.title;
        li.style.cursor="pointer";
        list.appendChild(li);
    });

}
displayBooks(newBooksArray);

searchInput.addEventListener("input", function(){
    const searchTerm=searchInput.value.toLowerCase();
    list.innerHTML="";
    const filteredBook = newBooksArray.filter(book=>{
        return book.title.toLowerCase().includes(searchTerm)
    });
    if(filteredBook.length===0){
        pElem.style.display="block";
    }else{
        pElem.style.display="none";
        displayBooks(filteredBook);
    }

})
clearBtn.style.cursor="pointer";
clearBtn.addEventListener("click", function(){
    searchInput.value="";
    pElem.style.display="none";
    displayBooks(newBooksArray);

});


