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
    get address(){ return this._address; }
    set address(address){
        let addressRegex = RegExp('^[a-zA-Z0-9_][a-zA-Z0-9_ ]{4,}$');
        if( addressRegex.test(address)){
            this._address=address;
        }
        else throw 'Invalid Address';  
    }
    
    get city(){ return this._city; }
    set city(city){
        this._city=city;
    }
    
    get state(){ return this._state; }
    set state(state){
        this._state=state;
    }

    get zip(){ return this._zip; }
    set zip(zip){
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
        if( zipRegex.test(zip)){
            this._zip=zip;
        }
        else throw 'Invalid Zip-Code';  
    }
    toString(){
        return "fullname = "+this.fullname + ", phone = " + this.phone + ", address =" + this.address +
                        ", city = "+this.city+ ", state = " + this.state +", zip-code = " + this.zip; 
    }
    
}