document.querySelector('#cep').oninvalid = function() {
    this.setCustomValidity('');

    if(!this.validity.valid) {
        this.setCustomValidity('OPS! Tem algo errado com o campo CEP!');

        this.parentNode.classList.add('contatoCampo--erro');
    }
}