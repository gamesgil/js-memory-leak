const btnCreate = document.getElementById('btnCreate')
btnCreate.addEventListener('click', createButtons)
const  btnDestroy = document.getElementById('btnDestroy')
btnDestroy.addEventListener('click', destroyButtons)

const callback = _ => console.log('x')

function createButtons() {
    for (let i = 0; i < 1000; i++) {
        const btn = document.createElement('button')
        btn.id = 'btn' + (document.querySelectorAll('button').length + i)
        btn.innerHTML = 'test' + (document.querySelectorAll('button').length + i)
        document.body.appendChild(btn)
        // btn.addEventListener('click', callback)
        btn.addEventListener('click', _ => null)
    }
}

function destroyButtons() {
    document.querySelectorAll('button').forEach(btn => {
        btn.removeEventListener('click', callback)
        // document.body.removeChild(btn)
        btn.style.display = 'none'
    })
}
