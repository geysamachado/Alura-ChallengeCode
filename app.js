const textarea = document.querySelector(".caixa-texto input");
const mensagem = document.querySelector(".mensagem");
const btnCopiar = document.getElementById("btnCopiar");

function btnEncriptar() {
    const textoEncriptado = encriptar(textarea.value);
    mensagem.value = textoEncriptado;
    textarea.value = ""; // Limpa o textarea após a encriptação
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.split(matrizCodigo[i][0]).join(matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textarea.value);
    mensagem.value = textoDesencriptado;
    textarea.value = ""; // Limpa o textarea após a desencriptação
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.split(matrizCodigo[i][1]).join(matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiarParaAreaDeTransferencia(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        console.log("Texto copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar texto: ", err);
    });
}

btnCopiar.addEventListener("click", () => {
    copiarParaAreaDeTransferencia(mensagem.value);
});