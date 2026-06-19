import { blogData } from "./data.js";

const blogEl = document.getElementById('blog')
const copyright = document.getElementById('copyright')
const headerEl = document.getElementById('header')

function header(){
    const header=`
        <div class="header-img-title">
            <div class="header-logo-container">
                <img  src="images/image 17.png">
            </div>
            <p class="header-heading">My learning journal</p>
        </div>
        <div class="header-btns">
            <a href='page1.html'>HOME</a>
            <a href='page3.html'>ABOUT ME</a>
        </div>`
        headerEl.innerHTML=header
}

function yearUpdater(){
    const date = new Date()
    copyright.textContent=`Copyright ©${date.getFullYear()}`
}

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

yearUpdater()

header()
