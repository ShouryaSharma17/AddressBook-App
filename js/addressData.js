class addressData {
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name)){
            this._name = name;
        }
        else throw 'Name is Incorrect!';
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[+]{1}[0-9]{2}[\\s][789]{1}[0-9]{9}$');
        if (phoneNumberRegex.test(phoneNumber)){
            this._phoneNumber = phoneNumber;
        }
        else throw 'Phone Number is Incorrect!';
    }
    toString(){
        return "name = '"+this.name + ", phone = '"+ this.phoneNumber;
    }
}