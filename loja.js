// Variáveis globais para armazenar o carrinho de compras
let carrinho = [];
let totalCompra = 0;

// Função para mostrar/esconder o carrinho
function toggleCarrinho() {
    const carrinho = document.getElementById('carrinho');
    carrinho.classList.toggle('show');
}

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome: nome, preco: preco });
    atualizarCarrinho();
}

// Função para atualizar o carrinho na página
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';

    totalCompra = 0;

    carrinho.forEach(item => {
        const itemCarrinho = document.createElement('li');
        itemCarrinho.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(itemCarrinho);

        totalCompra += item.preco;
    });

    document.getElementById('total').textContent = `Total: R$ ${totalCompra.toFixed(2)}`;
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.');
        return;
    }

    // Aqui você pode adicionar a lógica para finalizar a compra, enviar os dados para o backend, etc.
    alert(`Compra finalizada! Total: R$ ${totalCompra.toFixed(2)}`);

    // Limpar o carrinho após finalizar a compra
    carrinho = [];
    atualizarCarrinho();
}





