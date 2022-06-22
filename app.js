
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

//* work start date
// TODO :NOTE
/*Note: JavaScript counts months from 0 to 11:
January = 0.
December = 11.*/

const workStart = new Date(2022, 09, 23);
console.log(workStart);

const current = new Date();
console.log(current);

//! iki günün çıkarılması bize milisaniye cinsinden bir değer verecektir, bu yüzden saniye cinsinden değeri almak için 1000 ile bölüyoruz.

//* Time remaining

const sec = (workStart - current) / 1000;

//* day,hours,min,s created 

    const d = Math.floor(sec / 3600 / 24);
    const hrs = Math.floor(sec / 3600) % 24;
    const min = Math.floor(sec / 60) % 60;
    const s = Math.floor(sec) % 60
    console.log(d);

//* 

    days.innerText = d;
    hours.innerText = hrs;
    minutes.innerText = min;
    seconds.innerText = s;

//* 