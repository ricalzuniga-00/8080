class FloatingPointUnit {

    constructor() {
        this.f0 = 0.0;
        this.f1 = 0.0;
        this.result = 0.0;
        this.status = "READY";
    }

    setValues(value1, value2) {
        this.f0 = parseFloat(value1);
        this.f1 = parseFloat(value2);
        this.status = "READY";
    }

    add() {
        this.result = this.f0 + this.f1;
        this.status = "OK";
        return this.result;
    }

    subtract() {
        this.result = this.f0 - this.f1;
        this.status = "OK";
        return this.result;
    }

    multiply() {
        this.result = this.f0 * this.f1;
        this.status = "OK";
        return this.result;
    }

    divide() {
        if (this.f1 === 0) {
            this.result = null;
            this.status = "ERROR: DIVISION BY ZERO";
            return null;
        }

        this.result = this.f0 / this.f1;
        this.status = "OK";
        return this.result;
    }

    reset() {
        this.f0 = 0.0;
        this.f1 = 0.0;
        this.result = 0.0;
        this.status = "READY";
    }
}

const fpu = new FloatingPointUnit();