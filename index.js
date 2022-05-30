// Hero Form
const heroBtn = document.getElementById("heroBtn")
const heroInput = document.getElementById("heroInput")
const heroSuccessMsg  = document.getElementById("heroSuccessMessage")
const heroFailureMsg = document.getElementById("heroFailureMessage")

// Main Form
const mainFormBtn = document.getElementById("mainFormBtn")
const mainFormInput = document.getElementById("mainFormInput")
const mainFormSuccessMsg  = document.getElementById("mainFormSuccessMessage")
const mainFormFailureMsg = document.getElementById("mainFormFailureMessage")

// Handle Event
heroBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let submitted = handleFormClick(heroInput, heroSuccessMsg, heroFailureMsg)
    if (submitted) { disableAllButtons() }
    return true
})

mainFormBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let submitted = handleFormClick(mainFormInput, mainFormSuccessMsg, mainFormFailureMsg)
    if (submitted) { disableAllButtons() }
    return true
})

// Functions
function handleFormClick(input, success, failure) {
    let inputValue = input.value

    success.textContent = ""
    failure.textContent = ""
    
    if (inputValue.indexOf('@') > 0) {
        success.textContent = "Success!"
        success.style.display = "block"
        failure.style.display = "none"
        input.style.borderColor = "var(--clr-primary-1)"
        input.value = ""
        return true
    } else {
        failure.textContent = "Please check your email"
        failure.style.display = "block"
        success.style.display = "none"
        input.style.borderColor = "rgb(200, 10, 10)"
    }
}

function disableAllButtons() {
    buttons = document.querySelectorAll("button")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true
    }
}