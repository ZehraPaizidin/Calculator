let result = ''
const divParent = document.createElement('div')
divParent.classList.add('div')


const output = document.createElement('input')
output.classList.add('inp')
output.value = result
output.disabled = true

const btnWrapper = document.createElement('div')
btnWrapper.classList.add('div2')
const body = document.body
body.append(divParent)
divParent.append(output, btnWrapper)


const arr = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '0', 'AC', 'C', '=',
    '+', '-', ' ', '*', '/',
]
const getBtnValue = (event) => {
    console.log(event);
    let num = event.target.value
    if (num == 'C') {
        result = result.substring(0, result.length - 1)
    }
    else if (num == 'AC') {
        result = ''
    } else if (num == '=') {
        result = eval(result)
    }
    else {
        result += num
    }



    output.value = result
}


arr.forEach(element => {
    const btn = document.createElement('input')
    btn.classList.add('btn')
    btn.type = 'button'
    btn.value = element
    btn.addEventListener('click', getBtnValue)
    btnWrapper.append(btn)
})



