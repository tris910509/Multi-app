const rolePermissions = {
    Admin: [
        "home",
        "user",
        "pelanggan",
        "produk",
        "kategori",
        "item",
        "suplayer",
        "transaksi",
        "pembayaran",
        "laporan"
    ],
    Kasir: [
        "home",
        "pelanggan",
        "transaksi",
        "pembayaran"
    ],
    Operator: [
        "home",
        "laporan"
    ],
    Pengguna: [] // Hak akses untuk Pengguna disesuaikan oleh Admin
};

// Fungsi untuk menghasilkan navigasi berdasarkan peran
function generateNavbar(role) {
    const navItems = rolePermissions[role] || [];
    let navbar = "";

    navItems.forEach((item) => {
        navbar += `<li class="nav-item">
                      <a class="nav-link text-capitalize" href="${item}.html">${item}</a>
                   </li>`;
    });

    navbar += `<li class="nav-item"><a class="nav-link" href="login.html">Logout</a></li>`;
    return navbar;
}
