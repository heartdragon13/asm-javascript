function taoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc, id) {
    var sanPham = new Object();
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.khuVuc = khuVuc;

    if (id != null) {
        sanPham.id = id;
    }
    else {
        sanPham.id = taoId();
    }

    sanPham.tinhGiaBan = function () {
        var giaBan = this.giaGoc * (1 - this.phanTramGiamGia);
        return giaBan;
    }

    sanPham.toJson = function () {
        var json = JSON.stringify(this);
        return json;
    }

    sanPham.fromJson = function () {
        var doiTuongDayDu = new Object();

        var doiTuong = JSON.parse(json);

        var doiTuongDayDu = taoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia, doiTuong.khuVuc);
        return doiTuongDayDu;
    }

    sanPham.fromJsons = function (jsonDanhSachSanPham) {
        var danhSachSanPhamDayDu = new Array();
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

        for (var i = 0; i < danhSachSanPham.length; i++) {
            var sanPham = danhSachSanPham[i];
            var sanPhamDayDu = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc);
            danhSachSanPhamDayDu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamDayDu;
    }

    return sanPham;
}

function chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham) {
    var HTMLDanhSachSanPham = '<div class="items">';
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var htmlSanPham = chuyenDoiTuongSanPhamThanhHTML(sanPham);
        HTMLDanhSachSanPham = HTMLDanhSachSanPham + htmlSanPham;
    }
    HTMLDanhSachSanPham = HTMLDanhSachSanPham + '</div>';
    return HTMLDanhSachSanPham;
}

function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
    sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id)
    var html = '';
    html += '<div class="item">'
    html += '<div class="item-thumb">'
    html += '<img src="' + sanPham.hinhAnh + '" alt=""></div>'

    html += '<h2 class="item-title">' + sanPham.ten + '</h2>'
    html += '<div class="item-price">'
    html += '<span class="item-price-origin">' + sanPham.giaGoc + ' đ</span>'
    html += '<span class="item-price-sale">' + sanPham.tinhGiaBan() + 'đ</span></div>'
    html += '<button onclick="onClickDuaVaoGioHang(\'' + sanPham.id + '\')" class="btn btn-primary">Đưa vào giỏ hàng</button></div>'
    return html;
}



function laySanPhamTheoId(idSanPham) {
    var sanPham = new Object();
    var danhSachSanPham = layDanhSachSanPhamTuLocalStorage();

    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPhamHienTai = danhSachSanPham[i];
        if (sanPhamHienTai.id == idSanPham) {
            sanPham = sanPhamHienTai;
        }
    }
    sanPham=taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
    return sanPham;
}

function layDanhSachSanPhamTuLocalStorage() {
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');

    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}