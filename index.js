class Calculator{
    constructor(prevOperandTextEl, currOperandTextEl){
        this.prevOperandTextEl = prevOperandTextEl
        this.currOperandTextEl = currOperandTextEl
        this.clear()
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }


}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allclearButton = document.querySelector('[data-all-clear]')
const prevOperandTextEl = document.querySelector('[data-previous-operand]')
const currOperandTextEl = document.querySelector('[data-current-operand]')


