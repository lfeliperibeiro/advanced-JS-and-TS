function Calculator(){
    this.displayValue = document.querySelector('.display'),

    this.init = () => {
      this.buttonClick();
      this.pressEnter();
    };

    this.pressEnter = () => {
      this.displayValue.addEventListener('keyup', (event) => {
        if(event.keyCode === 13) {
          this.calculate();
          }
       }
      )
    };

    this.clearDisplay = () => {
      this.displayValue.value = '';
    };

    this.deleteOne = () => {
      this.displayValue.value = this.displayValue.value.slice(0, -1);
    };

   this.calculate = () => {
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
    };

    this.buttonClick = () => {
      document.addEventListener('click', (event) => {
        const target = event.target;
        if(target.classList.contains('btn-num')){
          this.addDisplay(target.innerText);
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
    };
    this.addDisplay= (value) => {
      this.displayValue.value += value;
      this.displayValue.focus();
    }
  }


const calculator = new Calculator();
calculator.init();