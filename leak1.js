const btn = document.querySelector("button")


let objs = []
const callback = _ => null;

const onClick = _ => {
    for (let i = 0; i < 100000; i++) {
        const obj = (function() {
            setInterval(_ => null, 1000)
            // setTimeout(_ => null, 1000)
        })()
        objs.push(obj)
    }

    setTimeout(_ => {
        objs.length = 0
        console.log('done')
    }, 5000)
}

btn.addEventListener("click", onClick)
