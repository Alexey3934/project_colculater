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



let secondResultL = 0
let secondResultK = 0

const buttonL = document.getElementById('buttonL')
buttonL.addEventListener('click', function() {
    const firstResultPitL = +sumPitL.textContent / 3
    const firstResultObshL = +sumObshL.textContent / 2
    const skidkaElL = +sumElL.textContent / 2 - (+sumElL.textContent / 2 / 100 * 13)
    const firstResultElL = (+sumElL.textContent - skidkaElL) / 2

    secondResultL = firstResultPitL + firstResultObshL + firstResultElL
    const pResultL = document.getElementById('secondResultL')
    pResultL.textContent = `Катя должна Лёше" \n ${Math.round(secondResultL)}`
    
}) 

const buttonK = document.getElementById('buttonK')
buttonK.addEventListener('click', function() {
    const firstResultPitK = +sumPitK.textContent / 3 * 2
    const firstResultObshK = +sumObshK.textContent / 2
   
    const skidkaElK = +sumElK.textContent / 2 - (+sumElK.textContent / 2 / 100 * 13)
    const firstResultElK = +sumElK.textContent - (+sumElK.textContent - skidkaElK) / 2

    secondResultK = firstResultPitK + firstResultObshK + firstResultElK
    const pResultK = document.getElementById('secondResultK')
    pResultK.textContent = `Лёша должен Кате \n ${Math.round(secondResultK)}`
    
}) 

const finish = document.getElementById('finish')
finish.addEventListener('click', () => {
    const lToK = `Лёша должен Кати ${Math.round(secondResultK - secondResultL)}`
    const kToL = `Катя должна Лёше ${Math.round(secondResultL - secondResultK)}`
    alert((secondResultK > secondResultL)? lToK : kToL)
})
