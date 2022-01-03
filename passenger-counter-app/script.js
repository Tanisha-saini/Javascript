let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    console.log(count)
    let x= " "+ count + " - "
    saveEl.textContent += x
    count=0
    countEl.innerText=count
}



