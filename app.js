
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

//* work start date
const workStart = new Date(2022, 10, 23);

const current = new Date();

//! iki günün çıkarılması bize milisaniye cinsinden bir değer verecektir, bu yüzden saniye cinsinden değeri almak için 1000 ile bölüyoruz.

//* Time remaining

const sec = (workStart - current) / 1000;
console.log(sec);

//* 