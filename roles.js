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
    Pengguna: [] // Pengguna default tidak memiliki akses; dapat diatur oleh Admin
};

// Fungsi untuk memvalidasi akses ke halaman
function validateAccess(currentPage) {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        alert("Anda harus login terlebih dahulu!");
        window.location.href = "login.html";
        return false;
    }

    const role = loggedInUser.role;
    const permissions = rolePermissions[role] || [];

    if (!permissions.includes(currentPage)) {
        alert("Akses ditolak! Anda tidak memiliki izin untuk mengakses halaman ini.");
        window.location.href = "home.html";
        return false;
    }

    return true;
}
