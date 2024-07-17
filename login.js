function signup() {
    let usernm = document.forms['myforms']['username'].value;
    let passwd = document.forms['myforms']['password'].value;

    if(usernm == 'popaye' || usernm == 'Popaye' && passwd == 'Popaye@123' || passwd == 'popaye@123')
    {
        window.location.href = "Advance-Infotech.html";
        return true; 
    }
    else
    {
        alert("\n Username or password is invalid... ");
        return false;
    }
}
