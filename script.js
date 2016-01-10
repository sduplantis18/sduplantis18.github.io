var answer = prompt("What programming lanquage is the name of a gem?");
if (answer === 'Ruby') {
    document.write ("<p>Tha's right!</p>")
}
else {
    document.write("<p>wrong!</p>")
}


//form validation function//
function isEmailEmpty() {
    var field = Document.getElementById('email');
if (field.value === '') {
    return true;
} else {
    return false;
    }
}

//if field is empty generate alert//
var fieldTest = isEmailEmpty();
if (fieldTest === true) {
    alert('Please provide your email address.')
}

