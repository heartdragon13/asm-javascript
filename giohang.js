var keyLocalStorageItemGioHang='danhSachItemGioHang';   

function layDanhSachItemGioHang(){
    var danhSachItemGioHang=new Array();
    var jsonDanhSachItemGioHang=localStorage.getItem(keyLocalStorageItemGioHang);

    if(jsonDanhSachItemGioHang!=null){
        danhSachItemGioHang=JSON.parse(jsonDanhSachItemGioHang);
    }
    return danhSachItemGioHang;
}

function taoDoiTuongItemGioHang(idSanPham,soLuong){
    var itemGioHang=new Object();
    itemGioHang.idSanPham=idSanPham;
    itemGioHang.soLuong=soLuong;
    return itemGioHang;
}

function luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang){
    var jsonDanhSachItemGioHang=JSON.stringify(danhSachItemGioHang);

    localStorage.setItem(keyLocalStorageItemGioHang, jsonDanhSachItemGioHang); 
}

