window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if(name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new addressData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    name.addEventListener('input', function() {
        if(phone.value.length == 0) {
            phoneError.textContent = "";
            return;
        }
        try {
            (new addressData()).phoneNumber = phone.value;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });
});

const createAddressBook = () => {
    let addressBookData = new AddressBookData();
    try{
        addressBookData.fullname = getInputValuesById('#name');
    }catch(e){
        setTextValue('.test-error', e);
        throw e;
    }
    addressBookData.phone = getInputValuesById('#phone');
    addressBookData.address = getInputValuesById('#address');
    addressBookData.city = getInputValuesById('[name=city]');
    addressBookData.state = getInputValuesById('[name=state]');
    addressBookData.zip = getInputValuesById('#zip');
    alert(addressBookData.toString());
    return addressBookData;
}

function createAndUpdateStorage(addressBookData){
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList != undefined){
        addressBookList.push(addressBookData);
    }
    else{
        addressBookList = [addressBookData];
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const getInputValuesById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}