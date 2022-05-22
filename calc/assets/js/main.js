function createCalculator(){
  return {
    displayValue: document.querySelector('.display'),

    init(){
      this.buttonClick();
      this.pressEnter();
    },

    pressEnter(){
      this.displayValue.addEventListener('keyup', (event) => {
        if(event.keyCode === 13) {
          this.calculate();
          }
       }
      )
    },

    clearDisplay(){
      this.displayValue.value = '';
    },

    deleteOne(){
      this.displayValue.value = this.displayValue.value.slice(0, -1);
    },

    calculate(){
      let count = this.displayValue.value;

      try{
        count = eval(count);
        if(!count){
          alert('Please enter a valid expression');
          return
        }

        this.displayValue.value = count;

      }catch(e){
        alert('Please enter a valid expression');
      }
    },

    

   

    buttonClick(){
      document.addEventListener('click', (event) => {
        const target = event.target;
        if(target.classList.contains('btn-num')){
          this.buttonStopDigit(target.innerText);
        }

        if(target.classList.contains('btn-clear')){
          this.clearDisplay();
        }

        if(target.classList.contains('btn-del')){
          this.deleteOne();
        }

        if(target.classList.contains('btn-eq')){
          this.calculate();
        }
      });
    },
    buttonStopDigit(value){
      this.displayValue.value += value;
    }
  }
}

const calculator = createCalculator();
calculator.init();