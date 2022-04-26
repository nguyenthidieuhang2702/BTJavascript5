// Bài 1
document.getElementById("ketQua").onclick = function() {
    var diemChuan = document.getElementById("diemChuan").value;
    var diemMon1 = document.getElementById("diemMon1").value;
    var diemMon2 = document.getElementById("diemMon2").value;
    var diemMon3 = document.getElementById("diemMon3").value;
    var X = document.getElementById("X").value;
    var A = document.getElementById("A").value;
    var B = document.getElementById("B").value;
    var C = document.getElementById("C").value;
    var khongThuocDoiTuong = document.getElementById("0").value;
    var doiTuong1 = document.getElementById("1").value;
    var doiTuong2 = document.getElementById("2").value;
    var doiTuong3 = document.getElementById("3").value;
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
    var khuVuc = "";
    var doiTuong = "";
    var ketQua = "";

    if (tongDiem >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        ketQua = "Bạn đã đậu. Tổng điểm: " + tongDiem;
    } else {
        ketQua = "Bạn đã rớt. Tổng điểm: " + tongDiem;
    }
    document.getElementById("footerKetQua").innerHTML = ketQua;
}


// Bài 2
document.getElementById("tinhTienDien").onclick = function() {
    var hoTen = document.getElementById("hoTen").value;
    var soKw = document.getElementById("soKw").value;
    var tienDien = "";
    var bac1 = 500;
    var bac2 = 650;
    var bac3 = 850;
    var bac4 = 1100;
    var bac5 = 1300;

    if (soKw < 0) {
        tienDien = "Số KW không hợp lệ";
    } else if (soKw <= 50) {
        tienDien = "Họ tên:" + hoTen + "; Tiền điện: " + soKw * bac1;

    } else if (soKw <= 100) {
        tienDien = "Họ tên:" + hoTen + "; Tiền điện: " + 50 * bac1 + ((soKw - 50) * bac2);

    } else if (soKw <= 200) {
        tienDien = "Họ tên:" + hoTen + "; Tiền điện: " + 50 * bac1 + (50 * bac2) + ((soKw - 100) * bac3);

    } else if (soKw <= 350) {
        tienDien = "Họ tên:" + hoTen + "; Tiền điện: " + 50 * bac1 + (50 * bac2) + (100 * bac3) + ((soKw - 200) * bac4);

    } else if (soKw <= 400) {
        tienDien = "Họ tên:" + hoTen + "; Tiền điện: " + 50 * bac1 + (50 * bac2) + (100 * bac3) + (100 * bac4) + ((soKw - 300) * bac5);
    }
    document.getElementById("footerTinhTienDien").innerHTML = tienDien;
}