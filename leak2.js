const btnCreate = document.getElementById('btnCreate')
btnCreate.addEventListener('click', createButtons)
const  btnDestroy = document.getElementById('btnDestroy')
btnDestroy.addEventListener('click', destroyButtons)

function createButtons() {
    for (let i = 0; i < 100; i++) {
        const btn = document.createElement('button')
        btn.id = 'btn' + i
        btn.innerHTML = 'test' + i
        document.body.appendChild(btn)
        btn.addEventListener('click', _ => null)
    }
}

function destroyButtons() {
    for (let i = 0; i < 100; i++) {
        const btn = document.getElementById('btn' + i)
        document.body.removeChild(btn)
    }
}
