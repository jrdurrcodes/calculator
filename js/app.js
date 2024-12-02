/**
 * WHAT DO WE WANT THE CALCULATOR TO DO??
 * define operations
 *      clear
 *      delete  
 *      append number
 *      choose operation
 *      compute
 *      update display
 */

class CALCULATOR {

    // 1 constructor
    constructor(prevOperText, currOperText) {
        this.prevOperText = prevOperText
        this.currOperText = currOperText
        this.clear()
    }
    //4 appendNumber
    appendNumber(number) {
        if (number === '.' && this.currOperand.includes('.')) return
        this.currOperand = this.currOperand.toString() + number.toString()

    // console.log(this.currOperand)
    }

    //8 chooseOperation
    //if there is no number the operation buttons are disabled
    chooseOperation(operartion) {
        if (this.currOperand === '') return
        if (this.prevOperand !== '') {
            this.compute()
        }

        this.operartion = operation
        // pass this.currOperand to this.preOperand
        this.prevOperand = this.currOperand
        this.currOperand = ''
    }
    // 2 clear
    clear() {
        this.prevOperand = ''
        this.currOperand = ''
        this.operation = undefined
    }

    //7 compute
    compute () {
        let computation

        const prev = parseFloat(this.prevOperand)
        const current = parseFloat(this.currOperand)

        if (isNaN(prev)  || isNaN(current)) return

        switch ( this.operation) {
            case '+':
                computation = prev + current
            case '-':
                computation = prev - current
            case '*':    
                computation = prev * current
            case'/':
                computation = prev / current   
                break
                default:
                    return

        }

        this.currOperand = computation
        this.operartion = undefined
        this.prevOperand = ''
    }

    //3 delete
    delete() {
        this.currOperand = this.currOperand.toString().slice (0, -1)
    }
    //6 getDisplayNumber
    getDisplayNumber(number) {
        const stringNumber = number.toString()

        const integerDigits = parseFloat(stringNumber.split('.'[0]))
        const decimalDigits = stringNumber.split('.'[1])

        let integerDisplay 

        if (isNaN(integerDigits))  {
            integerDisplay =''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }

        return decimalDigits
    }

    //5 updateDisplay
    updateDisplay() {
        this.currOperText.innerText = this.getDisplayNumber(this.currOperand)

        if (this.operation != null) {
            this.prevOperText.innerText = `${this.getDisplayNumber(this.prevOperand)}
            ${this.operation}`
        }else{ 
            this.prevOperText.innertext = ''
        }
    }
}

// 2 set constants to access buttons
//enclose attribuite-calue pairs in buckets
const numBtn = document.querySelectorAll('[data-number')
//console.log(numBtn)
const operBtn = document.querySelectorAll('[data-operational]')
const equalBtn = document.querySelector('[data-delete]')
const delBtn = document.querySelector('[data-delete]')
const allClearBtn = document.querySelector('[data-all-clear]')

const prevOperText = document.querySelector('[data-prev-operand]')
const currOperText = document.querySelector('[data-curr-operand]')

const calculator = new CALCULATOR(prevOperText, currOperText)


//3 addEventListner to buttons
numBtn.forEach(button => {
        button.addEventListener('click', ()=> {
           // console.log(button.innerText)
            calculator.appendNumber(button.innerText)
            calculator.updateDisplay()
        })
})

operBtn.forEach(button => {
    button.addEventListener('click', ()=> {
    // console.log(button.innerText) 
    calculator
    })
})

equalBtn.addEventListener('click', ()=> {
    console.log(equalBtn.innerText)
})

allClearBtn.addEventListener('click', ()=> {
    console.log(allClearBtn.innerText)
})

delBtn.addEventListener('click', ()=> {
    console.log(delBtn.innerText)
})