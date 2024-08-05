function submitform(){
let valid=true;
const password = document.querySelector('input[name="password"]');
 const confirmPassword = document.querySelector('input[name="confirmpassword"]');
 document.querySelectorAll('.error').forEach(el => el.textContent = '');
 if (password.value !== confirmPassword.value) {
    document.querySelector('#error-password-final').textContent = 'Passwords do not match.';
    valid = false;
}
const requiredFields = document.querySelectorAll('input[required]');
            requiredFields.forEach(field => {
                console.log(field.name,"fieldname")
                if (field.value.trim() === '') {
                    document.querySelector(`#error-${field.name}`).textContent = `${field.previousElementSibling.textContent} is required.`;
                    valid = false;
                }
            });
if(valid==true){
    document.querySelector('form').submit();
}

}