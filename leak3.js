const btnCreate = document.querySelector("#btnCreate")
const btnDestroy = document.querySelector("#btnDestroy")

btnCreate.addEventListener('click', start)
btnDestroy.addEventListener('click', destroy)

const list = []
let interval

function start() {
    interval = setInterval(_ => {
        let str = ''

        for (let i = 0; i < 10000; i++) {
            str+=String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 10))
        }
        
        list.push({
            data: str
        })

        console.log(list.length)
    }, 500)
}


function destroy() {
    clearInterval(interval)
}

