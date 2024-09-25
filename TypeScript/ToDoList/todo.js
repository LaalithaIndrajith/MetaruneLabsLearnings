var todoDescriptionInput = document.querySelector('#todoDescription');
var todoAddButton = document.querySelector('#todoAddBtn');
;
var warningToast = document.querySelector('#warningToast');
// Disabling the 'Add To Do' button when the length of the description is less than 3 characters
todoAddButton.disabled = true;
todoDescriptionInput.addEventListener('input', function () {
    console.log(warningToast);
    // todoAddButton.disabled = !(todoDescriptionInput.value.length > 3)
    if ((todoDescriptionInput.value.length > 3)) {
        todoAddButton.disabled = false;
    }
    else {
        todoAddButton.disabled = true;
        if (warningToast) {
            var toast = new bootstrap.Toast(warningToast);
            toast.show();
        }
    }
});
