class Valid2 extends Valid {
    constructor(email, password, emaiError, passwordError,) {
        super(email, password,);
        this.emaiError = '';
        this.passwordError = '';
    }
    validate() {
        super.validate()
        if (this.email.length == '') {
            this.isValid = false;
            this.emaiError = 'email empty'
        }

        if (this.password.length < 6)
            this.passwordError = 'min length 6'
    }
}