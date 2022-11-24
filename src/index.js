import '../index.css'
import JS_IMAGE from '../assets/img.png'

const imageHTML = document.createElement('img')
imageHTML.className = 'image'
imageHTML.src = JS_IMAGE

const textHTML = document.createElement('h1')
textHTML.className = 'text_styles'
textHTML.innerText = 'I love JavaScript'

document.body.append(textHTML, imageHTML)

console.log('Hello World!')
