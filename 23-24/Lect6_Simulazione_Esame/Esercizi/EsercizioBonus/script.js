// Aspetta il caricamento del documento prima di eseguire le funzioni
document.addEventListener('DOMContentLoaded', function() {
    fetchMagicNumbers();
    document.getElementById('multiply').addEventListener('click', function() { calculate('*'); });
    document.getElementById('divide').addEventListener('click', function() { calculate('/'); });
});

// Recupera i numeri magici dal servizio web
function fetchMagicNumbers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://diiorio.nws.cs.unibo.it/twe/14.07.2022b/api/index.php', true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const magicList = document.getElementById('magicNumbers');
            data.numeri_magici.forEach(function(number) {
                const li = document.createElement('li');
                li.textContent = number;
                magicList.appendChild(li);
            });
        } else {
            console.error('Errore durante il caricamento dei numeri magici:', xhr.statusText);
        }
    };
    
    xhr.onerror = function() {
        console.error('Errore di rete durante il tentativo di recupero dei numeri magici');
    };
    
    xhr.send();
}


// Calcola il risultato e aggiorna le liste
function calculate(op) {
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    if (num1 === '' || num2 === '' || (op === '/' && num2 === '0')) {
        alert('Per favore, inserisci dei numeri validi (non è possibile dividere per zero).');
        return;
    }

    const result = op === '*' ? num1 * num2 : num1 / num2;
    document.getElementById('result').textContent = result;

    // Aggiorna l'elenco delle operazioni
    const operationText = `${num1} ${op} ${num2} = ${result}`;
    const newOpLi = document.createElement('li');
    newOpLi.textContent = operationText;
    document.getElementById('operationsList').appendChild(newOpLi);

    // Verifica se il risultato è un numero magico
    const magicNumbers = Array.from(document.getElementById('magicNumbers').children).map(li => li.textContent);
    if (magicNumbers.includes(String(result))) {
        const newMagicLi = document.createElement('li');
        newMagicLi.textContent = result;
        document.getElementById('magicFound').appendChild(newMagicLi);
    }
}
