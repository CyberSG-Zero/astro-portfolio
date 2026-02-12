document.getElementById('copyEmail').addEventListener('click', function() {
        // 1. Obtenemos el texto de todos los spans dentro del enlace
        const emailText = this.innerText.replace(/\s/g, ''); // Quitamos espacios si los hubiera

        // 2. Usamos el API de portapapeles moderno
        navigator.clipboard.writeText(emailText).then(() => {
            // 3. Mostramos el mensaje de éxito
            const message = document.getElementById('copyMessage');
            message.classList.add("show");

            // 4. Ocultamos el mensaje después de 2 segundos
            setTimeout(() => {
                message.classList.remove("show");
            }, 2000);
        }).catch(err => {
            console.error('Error al copiar: ', err);
        });
    });