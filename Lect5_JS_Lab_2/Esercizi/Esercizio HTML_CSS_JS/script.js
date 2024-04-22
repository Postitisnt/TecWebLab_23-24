document.addEventListener('DOMContentLoaded', function() {
    function addProduct(containerId, countId, buttonId) {
        var container = document.getElementById(containerId);
        var countList = document.getElementById(countId);
        var countProdotto = parseInt(countList.textContent, 10);
        countProdotto++;
        
        if (countProdotto === 1) {
            container.style.visibility = 'visible';
        }
        if (countProdotto === 10) {
            document.getElementById(buttonId).disabled = true;
        }
        
        countList.textContent = countProdotto;
    }
    
    document.getElementById('btnP1').addEventListener('click', function() {
        addProduct('container1', 'countP1', 'btnP1');
    });
    document.getElementById('btnP2').addEventListener('click', function() {
        addProduct('container2', 'countP2', 'btnP2');
    });
    document.getElementById('btnP3').addEventListener('click', function() {
        addProduct('container3', 'countP3', 'btnP3');
    });
});

