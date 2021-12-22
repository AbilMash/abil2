const user = document.forms[0];
const logIn = user.lastElementChild;

const check = () => {
    if (user.username.value.length < 6 || user.password.value.length < 6){
        logIn.disabled = true;
    }else{
        logIn.disabled = false;
    }
}
const log = (e) => {
    e.preventDefault();
    alert(`Username = ${user.username.value} \n Password = ${user.password.value}`)

}
user.addEventListener(`change`, check)
logIn.addEventListener(`click`, log)