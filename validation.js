function showFeedBack(input, valid, message) {
	let validClass = (valid) ? 'is-valid' : 'is-invalid';
	let div = (valid) ? input.nextAll("div.valid-feedback") : input.nextAll("div.invalid-feedback");
	input.nextAll('div').removeClass('d-block');
	div.removeClass('d-none').addClass('d-block');
	input.removeClass('is-valid is-invalid').addClass(validClass);
	if (message) {
		div.empty();
		div.append(message);
	}
}
function defaultCheckElement(event) {
    this.value = this.value.trim();
    if (!this.checkValidity()) {
        showFeedBack($(this), false);
    } else {
        showFeedBack($(this), true);
    }
}

function userValidation(handler) {
    console.log(document.forms);
    let form = document.forms.fUser;
    console.log(handler);
    console.log(form);
    $(form).attr('novalidate', true);
    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;

        if (!this.ncNombre.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncNombre), false);
            firstInvalidElement = this.ncNombre;
        } else {
            showFeedBack($(this.ncNombre), true);
        }
        if (!this.ncEmail.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncEmail), false);
            firstInvalidElement = this.ncEmail;
        } else {
            showFeedBack($(this.ncEmail), true);
        }
        if (!this.ncContraseña.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncContraseña), false);
            firstInvalidElement = this.ncContraseña;
        } else {
            showFeedBack($(this.ncContraseña), true);
        }

        
        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.ncNombre.value, this.ncEmail.value, this.ncContraseña.value);
        } event.preventDefault();
        event.stopPropagation();
    });
    form.addEventListener('reset', (function (event) {
		let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
		feedDivs.removeClass('d-block').addClass('d-none');
		let inputs = $(this).find('input');
		inputs.removeClass('is-valid is-invalid');
	}));
    $(form.ncNombre).change(defaultCheckElement);
    $(form.ncEmail).change(defaultCheckElement);
    $(form.ncContraseña).change(defaultCheckElement);

}