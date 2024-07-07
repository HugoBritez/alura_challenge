// Función para encriptar el texto //
function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

// Función para desencriptar el texto //
function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

// Evento para el botón de encriptar//
document.getElementById('encript_btn').addEventListener('click', function() {
    const inputText = document.getElementById('encripter').value;
    const encryptedText = encryptText(inputText);
    displayResult(encryptedText);
});

// Evento para el botón de desencriptar//
document.getElementById('desencripter_btn').addEventListener('click', function() {
    const inputText = document.getElementById('encripter').value;
    const decryptedText = decryptText(inputText);
    displayResult(decryptedText);
});

// Función para mostrar el resultado//
function displayResult(text) {
    const resultText = document.querySelector('.encripted_text');
    const resultSubtitle = document.querySelector('.subtitle');
    resultText.textContent = text;
    resultSubtitle.textContent = 'Texto procesado:';
}

// Evento para el botón de copiar//
document.getElementById('copy_btn').addEventListener('click', function() {
    const textToCopy = document.querySelector('.encripted_text').textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert('Texto copiado al portapapeles!');
    }, function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
