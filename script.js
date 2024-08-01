document.addEventListener('DOMContentLoaded', function() {
    const campoSection = document.getElementById('campo');
    const cidadeSection = document.getElementById('cidade');

    campoSection.addEventListener('click', function() {
        alert('Você clicou na seção "Morar no Campo"!');
    });

    cidadeSection.addEventListener('click', function() {
        alert('Você clicou na seção "Estudar na Cidade"!');
    });
});
