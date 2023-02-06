import getElement from "./utils/queryHelper.js";

import fetchUser from "./utils/fetchData.js";




const img = getElement('.user-img')
const title = getElement('.user-title')
const fullName = getElement('.user-value')
const btn = getElement('.btn')
const btns = [...document.querySelectorAll('.icon')]

const displayUser = (person) => {
   img.src = person.img
   title.textContent = `My Name is`
   fullName.textContent = person.name
   btns[0].classList.add('active')
   btns.forEach((btn)=>{
    const label = btn.dataset.label
   
        btn.addEventListener('click', () =>{
            // console.log(label)
            // console.log(person[label])
            title.textContent = `My ${label} is`

            fullName.textContent = person[label]
            btns.forEach((btn)=> btn.classList.remove('active'))
            btn.classList.add('active')
        })
   })
}

const showUser = async () =>{
   const person = await fetchUser()
   displayUser(person)
//    console.log(person)
}

window.addEventListener('DOMContentLoaded',()=>{
    showUser()
})

btn.addEventListener('click',()=>{
    showUser()
})
