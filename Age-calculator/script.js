const form = document.querySelector('form');
const userYear = document.querySelector('user-year');
const userMonth = document.querySelector('user-month');
const userDay = document.querySelector('user-day');
const userYearSpan = document.querySelector('.userYearSpan');
const userMonthSpan = document.querySelector('.userMonthSpan');
const userDaySpan = document.querySelector('.userDaySpan');


form.addEventListener('submit', e => {
    e.preventDefault();
    
    const userDayInput = parseInt(form.day.value);
    const userMonthInput = parseInt(form.month.value);
    const userYearInput = parseInt(form.year.value);

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    let userY = year - userYearInput;
    let userM = month - userMonthInput;
    const userD = Math.abs(day - userDayInput);

    if (userM < 0) {
        userM += 12;
        userY--;     
    }

    let yearCounter = 0;
    let monthCounter = 0;
    let dayCounter = 0;

    const yeartimer = setInterval(() => {
        userYearSpan.textContent = `${yearCounter}`;
        if (yearCounter < userY) {
            yearCounter++;
        } else {
            clearInterval(yeartimer);
        }
    }, 10);

    const monthtimer = setInterval(() => {
        userMonthSpan.textContent = `${monthCounter}`;
        if (monthCounter < userM) {
            monthCounter++;
        } else {
            clearInterval(monthtimer);
        }
    }, 50);

    const daytimer = setInterval(() => {
        userDaySpan.textContent = `${dayCounter}`;
        if (dayCounter < userD) {
            dayCounter++;
        } else {
            clearInterval(daytimer);
        }
    }, 20);

});
