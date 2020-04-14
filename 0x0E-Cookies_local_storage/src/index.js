function setCookies(name, value){
    let firstnameValue = $('#firstname').val();
    let emailValue = $('#email').val();

        document.cookie = "firstname=" + firstnameValue;
        document.cookie = "email=" + emailValue;
    }  
function showCookies(){
    let firstnameValue = $('#firstname').val();
    let emailValue = $('#email').val()
    $("body").append("<p>Cooklies: </p>" + firstnameValue + emailValue)
}
