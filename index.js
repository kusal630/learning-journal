import { blogData } from "./data.js";

const blogEl = document.getElementById('blog')
const copyright = document.getElementById('copyright')
// const blog2 = document.getElementById('blog-2')
// const blog3 = document.getElementById('blog-3')


function yearUpdater(){
    const date = new Date()
    copyright.textContent=`Copyright ©${date.getFullYear()}`
}
yearUpdater()

function renderBlog1(){
    for(let blog of blogData){
        const blogContent = `
        <div class='blog-section'>
            <img class='blog-img' src='images/${blog.image}'>
            <p class='blog-date'>${blog.date}</p>
            <p class='blog-heading'>${blog.name}</p>
            <p class='blog-context'>${blog.content}</p>
        </div>`
        blogEl.innerHTML += blogContent
    }
}
renderBlog1()