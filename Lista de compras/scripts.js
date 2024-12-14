function adicionarItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();
    const listaDeCompras = document.getElementById('listaDeCompras');

    if (itemText === '') {
        alert('Por favor, insira um item.');
        return;
    }

    const items = Array.from(listaDeCompras.getElementsByTagName('li')).map(li => li.firstChild.textContent.trim());
    if (items.includes(itemText)) {
        alert('Esse item já está na lista.');
        return;
    }

    const li = document.createElement('li');
    li.classList.add('fade-in');
    li.innerHTML = `${itemText} <button onclick="removerItem(this)">Remover</button>`;
    listaDeCompras.appendChild(li);

    itemInput.value = '';
}

function removerItem(button) {
    const li = button.parentElement;
    li.classList.add('fade-out');
    li.addEventListener('animationend', () => li.remove());
}
