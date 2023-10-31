// local reviews data
const reviews = [
  {
    id: 0,
    author: 'Nobert Noob',
    job: 'Xiao Mi',
    img: './images/nobert-noob.png',
    comment: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 1,
    author: 'Susan Smith',
    job: 'CNN',
    img: './images/susan-smith.png',
    comment: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
  },
  {
    id: 2,
    author: 'Anna Johnson',
    company: 'Adobe',
    img: './images/anna-johnson.png',
    comment: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle.',
  },
  {
    id: 3,
    author: 'Peter Jones',
    company: 'Intern',
    img: './images/peter-jones.png',
    comment: 'Sriracha literally flexitarian irony, vape marfa unicorn.',
  },
  {
    id: 4,
    author: 'Bill Anderson',
    company: 'Gog.com',
    img: './images/bill-anderson.png',
    comment: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually.',
  },
];

// select items
const img = document.getElementById ("person-img");
const comment = document.getElementById ("comment");
const author = document.getElementById ("author");
const company = document.getElementById ("company");

const prevBtn = document.querySelector (".prev-btn");
const nextBtn = document.querySelector (".next-btn");

//set first item
let currentItem = 0;

//load initial item 

window.addEventListener('DOMContentLoaded', function () {
   showPerson(currentItem);
});


function showPerson(testimonial) {
  const item = reviews [testimonial];
  img.src = item.img;
  author.textContent = item.author;
  company.textContent = item.company;
  comment.textContent = item.comment;  
};


// next person
nextBtn = addEventListener('click', function () {
  currentItem++;
  //mengakses bagian terakhir dari array reviews, jadi current item kembali ke array 0//
  if (currentItem > reviews.length -1) { 
    currentItem = 0;
  }
  showPerson(currentItem);  
});

// prev person
prevBtnBtn = addEventListener('click', function () {
  currentItem--;
  //mengakses bagian terakhir dari array reviews, jadi current item kembali ke array 0//
  if (currentItem < reviews.length -1) { 
    currentItem = 0;
  }
  showPerson(currentItem);  
});
