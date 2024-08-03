const patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
}

const inps = document.querySelectorAll('input')

inps.forEach(inp => {
    inp.onkeyup = (e) => {
        const val = e.target.value

        if (patterns[inp.name].test(val)) {
            inp.style.borderColor = "blue"
        } else {
            inp.style.borderColor = "red"
        } 
        patterns[inp.name].lastIndex = 0
    }

    console.log(inp)
}) 