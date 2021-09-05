const quotes = [
   {
       text: "Do one thing every day that scares you.",
       author: "Eleanor Roosevelt"
   },
   {
       text:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
       author: "Dr. Seuss"
   },
   {
        text:"You only live once, but if you do it right, once is enough.",
        author:"Mae West"
    },
    {
        text:"If you tell the truth, you don't have to remember anything.",
        author:"Mark Twain"
    },
    {
        text:"A friend is someone who knows all about you and still loves you.",
        author:"Elbert Hubbard"
    },
    {
        text:"“Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author:"Mahatma Gandhi"
    },
    {
        text:"It is better to be hated for what you are than to be loved for what you are not.",
        author:"Andre Gide, Autumn Leaves"
    },
    {
        text:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author:"Albert Einstein"
    },
    {
        text:"“A woman is like a tea bag; you never know how strong it is until it's in hot water.",
        author:"Eleanor Roosevelt"
    },
    {
        text:"Love all, trust a few, do wrong to none.",
        author:" William Shakespeare, All's Well That Ends Well"
    }];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const select = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText  = select.text;
author.innerText = select.author;

console.log(select);