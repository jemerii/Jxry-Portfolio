let products = JSON.parse(localStorage.getItem('inventory')) || [];

const form = document.getElementById('productForm');
const tableBody = document.querySelector('#inventoryTable tbody');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const quantity = parseInt(document.getElementById('quantity').value);
  const price = parseFloat(document.getElementById('price').value);

  products.push({ id: Date.now(), name, quantity, price });
  saveAndRender();
  form.reset();
});

function saveAndRender() {
  localStorage.setItem('inventory', JSON.stringify(products));
  renderTable();
}

function renderTable() {
  tableBody.innerHTML = '';
  products.forEach((p, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${p.name}</td>
      <td>${p.quantity}</td>
      <td>₱ ${p.price.toFixed(2)}</td>
      <td>₱ ${(p.quantity * p.price).toFixed(2)}</td>
      <td>
        <button onclick="editProduct(${p.id})">Edit</button>
        <button onclick="deleteProduct(${p.id})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const newName = prompt('Enter new name:', product.name);
    if (newName === null) return; // user pressed Cancel

    const newQty = prompt('Enter new quantity:', product.quantity);
    if (newQty === null) return; // cancel -> stop editing

    const newPrice = prompt('Enter new price:', product.price);
    if (newPrice === null) return; 

    if (newName && newQty && newPrice) {
        product.name = newName.trim();
        product.quantity = parseInt(newQty);
        product.price = parseFloat(newPrice);
        saveAndRender();
  }
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    saveAndRender();
}


renderTable();
