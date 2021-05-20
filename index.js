const listPitL   = document.querySelector('#listPitL') 
const listObshL  = document.querySelector('#listObshL') 
const listElL    = document.querySelector('#listElL') 

const listPitK   = document.querySelector('#listPitK') 
const listObshK  = document.querySelector('#listObshK') 
const listElK    = document.querySelector('#listElK') 


const inputPitL  = document.getElementById('inputPitL')
const inputObshL = document.getElementById('inputObshL')
const inputElL   = document.getElementById('inputElL')

const inputPitK  = document.getElementById('inputPitK')
const inputObshK = document.getElementById('inputObshK')
const inputElK   = document.getElementById('inputElK')


const sumPitL    = document.querySelector('#sumPitL')
const sumObshL   = document.querySelector('#sumObshL')
const sumElL     = document.querySelector('#sumElL')

const sumPitK    = document.querySelector('#sumPitK')
const sumObshK   = document.querySelector('#sumObshK')
const sumElK     = document.querySelector('#sumElK')


inputPitL.addEventListener('keydown', function(press) { 
    if (press.keyCode === 13) {
        const current = this.value 
        const pEl = document.createElement('p')
        pEl.textContent = `${current}`;
        listPitL.prepend(pEl)
    
        sumPitL.innerHTML = +sumPitL.innerHTML + +current
        this.value = ''
    }                   
})

inputObshL.addEventListener('keydown', function(press) { 
    if (press.keyCode === 13) {
        const current = this.value 
        const pEl = document.createElement('p')
        pEl.textContent = `${current}`;
        listObshL.prepend(pEl)
    
        sumObshL.innerHTML = +sumObshL.innerHTML + +current
        this.value = ''
    }                   
})

inputElL.addEventListener('keydown', function(press) { 
    if (press.keyCode === 13) {
        const current = this.value 
        const pEl = document.createElement('p')
        pEl.textContent = `${current}`;
        listElL.prepend(pEl)
    
        sumElL.innerHTML = +sumElL.innerHTML + +current
        this.value = ''
    }                   
})

inputPitK.addEventListener('keydown', function(press) { 
    if (press.keyCode === 13) {
        const current = this.value 
        const pEl = document.createElement('p')
        pEl.textContent = `${current}`;
        listPitK.prepend(pEl)
    
        sumPitK.innerHTML = +sumPitK.innerHTML + +current
        this.value = ''
    }                   
})

inputObshK.addEventListener('keydown', function(press) { 
    if (press.keyCode === 13) {
        const current = this.value 
        const pEl = document.createElement('p')
        pEl.textContent = `${current}`;
        listObshK.prepend(pEl)
    
        sumObshK.innerHTML = +sumObshK.innerHTML + +current
        this.value = ''
    }                   
})

inputElK.addEventListener('keydown', function(press) { 
    if (press.keyCode === 13) {
        const current = this.value 
        const pEl = document.createElement('p')
        pEl.textContent = `${current}`;
        listElK.prepend(pEl)
    
        sumElK.innerHTML = +sumElK.innerHTML + +current
        this.value = ''
    }                   
})
