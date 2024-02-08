/* 1.İstifadəçi girişi üçün forma ilə HTML səhifəsi yaradın. User name, password,
"Məni yadda saxla" checkbox ile. Formanı doldurduqdan sonra ekranda: “Salam, Ad! Səni xatırladım/yadıma düşmədim” gorsedin. 
*/
// const form = document.getElementById('task1-form');
// const queryParams = window.location.search;
 
// console.log('queryParams', queryParams)
 
// const data = new URLSearchParams(queryParams);
 
// const name = data.get('login');
// const password = data.get('password');
// const isRemember = data.get('Remember');
// const submited = data.get('submited');
// const infos = document.getElementById('infos');
// if (isRemember == "on" && submited=="Submit"){
//     form.hidden = true;
//     infos.innerHTML = `Salam ${name}! Seni xatirladim!`; 
// }
// else if (isRemember != "on" && submited=="Submit"){
//     form.hidden = true;
//     infos.innerHTML = `Salam ${name}! Seni xatirlamadim!`; 
// }


// 2.stifadəçi qeydiyyat forması ilə HTML səhifəsi yaradın. Formaya e-poçt, giriş və parol daxil edilməlidir
// (2 dəfə). Formanı doldurduqdan sonra erkanda göstərin: “E-poçt
// təsdiq e-poçtu filan-filanlara göndərilib.”

// const form = document.getElementById('task2-form');
// const queryParams = window.location.search;
 
// console.log('queryParams', queryParams)
 
// const data = new URLSearchParams(queryParams);
 
// const name = data.get('login');
// const email = data.get('email');
// const password = data.get('password');
// const confirm = data.get('confirm');
// const submited = data.get('submited');

// const infos = document.getElementById('infos');

// if (password == confirm && submited=="Submit"){
//     form.hidden = true;
//     infos.innerHTML = `${email} təsdiq e-poçtu filan-filanlara göndərilib.`; 
// }

// 3.Məlumatı doldurmaq üçün forma ilə HTML səhifəsi yaradın
// istifadəçi haqqında informasiya ile. Formanı doldurduqdan sonra bütün daxil edilmiş məlumatları göstərin
// məlumat mətn şəklində.

// const form = document.getElementById('task3-form');
// const queryParams = window.location.search;
 
// console.log('queryParams', queryParams)
 
// const data = new URLSearchParams(queryParams);
 
// const password = data.get('password');
// const confirm = data.get('confirm');
// const submited = data.get('submited');

// const infos = document.getElementById('infos');

// if (password == confirm && submited=="Submit"){
//     form.hidden = true;
//     for(const key of data) {
//         console.log('key', key);
//         infos.innerHTML += `${key[0]} : ${key[1]}`; 
//     }
// }


// 4.Rəng palitrası və yeni rəng əlavə etmək üçün forma ilə HTML səhifəsi yaradın. Formanı doldurduqdan sonra yeni rəng olmalıdır
// palitraya əlavə edildi.

// const form = document.getElementById('task4-form');
// const queryParams = window.location.search;
 
// console.log('queryParams', queryParams)
 
// const data = new URLSearchParams(queryParams);
 
// const r = data.get('R');
// const g = data.get('G');
// const b = data.get('B');
// const submited = data.get('add');

// const palete = document.getElementById('color-palete');

// if (submited=="Submit"){
//     const colorString = rgbToColorString(r, g, b);
//     palete.style.background = colorString;
// }

// function rgbToColorString(red, green, blue) {
//     red = Math.max(0, Math.min(255, red));
//     green = Math.max(0, Math.min(255, green));
//     blue = Math.max(0, Math.min(255, blue));
  
//     const colorString = `rgb(${red}, ${green}, ${blue})`;
  
//     return colorString;
// }
  
// 5.İstənilən sayda sualdan test yaratmaq üçün HTML səhifəsi yazın. Suala bir doğru və bir doğru əlavə edə bilərsiniz.
// səhv cavab. Hər sualı əlavə edərkən onu göstərin
// forma yuxarıdakı siyahıda.

// let arr = new Array();
// const form = document.getElementById('task5-form');
// const queryParams = window.location.search;
 
// console.log('queryParams', queryParams)
 
// const data = new URLSearchParams(queryParams);
 
// const question = data.get('question');
// const correct = data.get('correct');
// const wrong = data.get('wrong');
// const submited = data.get('add');

// const newquestion = document.getElementById('newquestion');

// document.getElementById('task5-form').addEventListener("submit", (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const formValues = {};
//     for(let [key, value] of data.entries()) {
//         formValues[key] = value;
//     }
//     console.log('first', formValues)
//     newquestion.innerHTML += `<br/><br/>Question: ${formValues["question"]} <br/>Correct Answer: ${formValues["correct"]}<br/>Wrong Answer: ${formValues["wrong"]}`;
// })
