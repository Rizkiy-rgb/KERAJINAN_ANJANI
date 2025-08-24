document.addEventListener('DOMContentLoaded', function() {
    const produkList = document.querySelector('.produk-list');

    const produk = [
        { nama: 'Tas Kulit', harga: 'Rp 500.000' },
        { nama: 'Dompet', harga: 'Rp 250.000' },
        { nama: 'Sling Bag', harga: 'Rp 450.000' }
    ];

    produk.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${item.nama}</h3><p>${item.harga}</p>`;
        produkList.appendChild(div);
    });
});
