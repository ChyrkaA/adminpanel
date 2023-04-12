import React from "react";
import ReactDOM from 'react-dom/client';
import Editor from "./components/editor";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Editor/> 
);

// $.get('./api', data => {
//     data.forEach(file=>{
//         $('body').append(`<h1>${file}</h1>`)
//     })
// }, 'JSON'); //парсим пришедший json на обычный массив



// function getPageList(){
//     document.querySelectorAll('h1').forEach(item=>item.remove());
//     async function getData(url) {
//         const res = await fetch(url);
//         if (!res.ok) {
//                 throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//         }
//         return await res.json();
//     }
//     getData('./api')
//         .then(data=>{
//             data.forEach(file=>{
//                 document.querySelector('body').insertAdjacentHTML('beforeend', `<h1>${file}</h1>`);
//             });
//         });
// }

// getPageList();

// $('button').click(()=>{
//     $.post('./api/createNewPage.php', {
//         'name': $('input').val()
//     }, ()=>{
//         getPageList();
//     })
//     .fail(()=>{
//         alert('Page empty!');
//     });
// });



// async function postData(url, method, body) {
//     const res = await fetch(url, {method: method, body: body});
//     return await res;
// }

// const value = document.querySelector('input');
// const button = document.querySelector('button');

// button.addEventListener('click', ()=>{
//     postData('./api/createNewPage.php', 'POST', {'name': value.value})
//     .then(()=>{
//         getPageList();
//     })
//     .catch(()=>alert('Error'));
// });
