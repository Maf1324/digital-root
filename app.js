function main() {
    const input = document.querySelector('.valor');
    const btnSend =  document.querySelector('.send');
    const total = document.querySelector('.total');
    const msg = document.querySelector('.result-msg')
    const previousContainer = document.querySelector('.previous-list')
    const previousTitle = document.querySelector('.previous-title')
    let previous = JSON.parse(localStorage.getItem('previous')) || []

    btnSend.addEventListener('click', () => {
        if (!input.value) return;
        start()
    });

    input.addEventListener('keypress', (e)=> {
        if (!input.value) return;
        if (e.keyCode === 13) {
        start()
        }
    });

    function renderPrevious() {
        previousContainer.innerHTML = ''
        if (previous.length > 0){
            // console.log(lenght(previous));
            previousTitle.innerText = 'Previous searches:'
        }
        previous.map(e => {
            let p = document.createElement('li')
            p.innerText = `${e.search} = ${e.final}`
            previousContainer.appendChild(p)
        })
    }

    function start() {
        getDigitalRoot(input.value)
        input.value = ''
        input.focus();
        }

    function getDigitalRoot(value) {
        if (isNaN(value)) return;
        msg.innerText = `The digital root of "${value}" is:`
        let final = handleValue(value)
        total.innerText = final
        setPrevious(value, final)
    }

    function handleValue(value) {
        let list = []
        for (i of value) list.push(parseInt(i));
        let total = list.reduce((e, i) => e + i, 0)
        if (total >= 10) return handleValue(total.toString()) 
        return total
    }

    function setPrevious(search, final) {
        obj = {search, final}
        previous.push(obj)
        localStorage.setItem('previous',JSON.stringify(previous))
        renderPrevious()
    }

    renderPrevious()
}

main()