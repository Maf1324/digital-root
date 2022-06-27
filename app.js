function main() {
    const input = document.querySelector('.valor');
    const btnSend =  document.querySelector('.send');
    const total = document.querySelector('.total');

    btnSend.addEventListener('click', () => {
        if (!input.value) return;
        getDigitalRoot(input.value)
        input.value = ''
        input.focus();
    });

    input.addEventListener('keypress', (e)=> {
        if (!input.value) return;
        if (e.keyCode === 13) {
            getDigitalRoot(input.value)
            input.value = ''
            input.focus();
            //TODO Colocar a função
        }
    });

    function getDigitalRoot(value) {
        if (isNaN(value)) {
            return
        };
        let final = handleValue(value)
        total.innerText = final
    }

    function handleValue(value) {
        let list = []
        for (i of value) list.push(parseInt(i));
        let total = list.reduce((e, i) => e + i, 0)
        if (total >= 10) {
            return handleValue(total.toString()) 
        }
        return total
    }
}

main()