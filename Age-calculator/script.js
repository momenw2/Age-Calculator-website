const form = document.querySelector('form');
// const userDayInput = document.querySelector('input');
const userYear = document.querySelector('user-year');
const userMonth = document.querySelector('user-month');
const userDay = document.querySelector('user-day');
const userYearSpan = document.querySelector('.userYearSpan');
const userMonthSpan = document.querySelector('.userMonthSpan');
const userDaySpan = document.querySelector('.userDaySpan');


form.addEventListener('submit', e => {
    e.preventDefault();
    
    const userDayInput = form.day.value;
    const userMonthInput = form.month.value;
    const userYearInput = form.year.value;

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    const userY = year - userYearInput;
    const userM = month - userMonthInput;
    const userD = Math.abs(day - userDayInput);


    userYearSpan.textContent = `${userY}`;
    userMonthSpan.textContent = `${userM}`;
    userDaySpan.textContent = `${userD}`;



});

