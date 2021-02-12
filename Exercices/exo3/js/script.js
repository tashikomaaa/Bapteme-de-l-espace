function validateForm () {
    const myField = document.getElementById('myField');
    if(myField.value == '') {
        document.getElementById('myFieldError').innerHTML = "le champ doit etre remplit";
        return false;
    } else {
        document.getElementById('myFieldError').innerHTML = "";
        alert('gg bro')
        return true;
    }
}