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
    document.forms.fUser;
    let form = document.forms.fUser;
    console.log(handler);
    console.log(form);
    $(form).attr('novalidate', true);
    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;
        this.ncImagen.value = this.ncImagen.value.trim();
        showFeedBack($(this.ncImagen), true);

        if (!this.ncNombre.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncNombre), false);
            firstInvalidElement = this.ncNombre;
        } else {
            showFeedBack($(this.ncNombre), true);
        }
        if (!this.ncApellido1.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncApellido1), false);
            firstInvalidElement = this.ncApellido1;
        } else {
            showFeedBack($(this.ncApellido1), true);
        }
        if (!this.ncApellido2.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncApellido2), false);
            firstInvalidElement = this.ncApellido2;
        } else {
            showFeedBack($(this.ncApellido2), true);
        }
        if (!this.ncBorn.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncBorn), false);
            firstInvalidElement = this.ncBorn;
        } else {
            showFeedBack($(this.ncBorn), true);
        }
        
        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.ncNombre.value, this.ncApellido1.value, this.ncApellido2.value, this.ncBorn.value, this.ncImagen.value);
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
    $(form.ncApellido1).change(defaultCheckElement);
    $(form.ncApellido2).change(defaultCheckElement);
    $(form.ncBorn).change(defaultCheckElement);

}