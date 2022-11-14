var total = document.getElementById('total')
var tot1=0.00;
var quantidadeProdutoSelecionados = document.getElementById('quantidades');
var quant=0;



function addProduct(product) {

    // adiciona valores a qty
    var quantidadeDeUmProd = document.getElementById('qty'+ product);
    quantidadeDeUmProd.value = parseFloat(quantidadeDeUmProd.value) + 1

    // adiciona quantidades ao visor 
    quant++;
    quantidadeProdutoSelecionados.innerText = quant;

    // adiciona o preço ao visor
    var preco= document.getElementById('price'+ product);
    var valorPreco = preco.value;
    tot1 += parseFloat(valorPreco)
    console.log(tot1);  
    total.innerText = tot1.toFixed(2);
}
        
    


function valid(){
    if (quant==0){
        alert('Não há produtos selecionados');
        return false;
    
    } else {
        return true;
    }

}
function clean(){
    quant=0;
    quantidadeProdutoSelecionados.innerText = quant;
    tot1= 0.00;
    total.innerText = (tot1).toFixed(2);
}

