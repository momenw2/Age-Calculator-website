const form = document.querySelector('form');
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


    // userYearSpan.textContent = `${userY}`;
    // userMonthSpan.textContent = `${userM}`;
    // userDaySpan.textContent = `${userD}`;

    let yearCounter = 0;
    let monthCounter = 0;
    let dayCounter = 0;


    const yeartimer = setInterval(() => {
        userYearSpan.textContent = `${yearCounter}`;
        if(yearCounter === userY){
            clearInterval(yeartimer);
        }else{
            yearCounter++;
        }
    },10);

    const monthtimer = setInterval(() => {
        userMonthSpan.textContent = `${monthCounter}`;
        if(monthCounter === userM){
            clearInterval(monthtimer);
        }else{
            monthCounter++;
        }
    },50);

    const daytimer = setInterval(() => {
        userDaySpan.textContent = `${dayCounter}`;
        if(dayCounter === userD){
            clearInterval(daytimer);
        }else{
            dayCounter++;
        }
    },20);

});

