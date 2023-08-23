document.title = 'fikri gobles'
const body = document.body
// console.log(document.title)

body.append(`Hello World`)

const h1 = document.createElement('h1')
h1.textContent = 'INI H1 NYA CUY'

const namaSaya = document.createElement('p')
namaSaya.innerHTML = '<marquee>ehan ucul</marquee>'

const namaKamu = document.createElement('i')
namaKamu.innerText = 'fikri gobles'

body.append(h1)
body.append(namaSaya)
body.append(namaKamu)

