const todoDescriptionInput = document.querySelector('#todoDescription') as HTMLInputElement;
const todoAddButton = document.querySelector('#todoAddBtn') as HTMLButtonElement;;
const warningToast = document.querySelector('#warningToast');

// Ensure Bootstrap types are available
declare var bootstrap: any;

// Disabling the 'Add To Do' button when the length of the description is less than 3 characters
todoAddButton.disabled = true;
todoDescriptionInput.addEventListener('input', function (){
    if((todoDescriptionInput.value.length > 3)){
        todoAddButton.disabled = false;
    }else{
        todoAddButton.disabled = true;
        if (warningToast) {
            const toast = new bootstrap.Toast(warningToast);
            toast.show();
        }
    }
})

