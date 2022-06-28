function main() {
    const input = document.querySelector('.valor');
    const btnSend =  document.querySelector('.send');
    const total = document.querySelector('.total');
    const msg = document.querySelector('.result-msg')
    // TODO add way to show the previous results

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

    function start() {
        msg.innerText = `The digital root of "${input.value}" is:`
        getDigitalRoot(input.value)
        input.value = ''
        input.focus();
        }

    function getDigitalRoot(value) {
        if (isNaN(value)) return;
        let final = handleValue(value)
        total.innerText = final
    }

    function handleValue(value) {
        let list = []
        for (i of value) list.push(parseInt(i));
        let total = list.reduce((e, i) => e + i, 0)
        if (total >= 10) return handleValue(total.toString()) 
        return total
    }
}

main()