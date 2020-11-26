let calculator = {
    read(a, b){
        if (a && b){
            this.num1 = a;
            this.num2 = b;
        }
    },

    sum(){
        let result = 0;
        for (let key in this) {
            result += (typeof this[key] == 'number') ? this[key] : 0;
        }

        return result;
    },

    mul(){
        let result = 1, 
            flag = false;

        for (let key in this) {
            flag = true;
            result *= (typeof this[key] == 'number') ? this[key] : 1;
        }

        if (flag) {
            return result
        }
        else {
            return null
        }
    }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
