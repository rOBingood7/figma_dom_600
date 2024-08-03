const patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
}

const inps = document.querySelectorAll('input')
const form = document.querySelector('form')

form.onsubmit = (e) => {
    e.preventDefault()
    
    if(inps.length > 0) {
        Toastify({
            text: "This is a toast",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
    }

    form.reset()
}




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
}) 

