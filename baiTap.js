function bai1() {
    let doC = parseFloat(prompt("Nhap do C la: "))
    return document.write("Do C la " + doC + " => Do F la: " + (doC * 9 / 5 + 32) + '<br>');
}

bai1();

function bai2() {
    let m = parseFloat(prompt("Nhap so met muon doi sang feet la: "));
    return document.write(m + " met doi sang feet la: " + m * 3.2808 + "<br>");
}

bai2();

function bai3() {
    let m = parseFloat(prompt("Nhap canh hinh vuong "));
    return document.write("Dien tich hinh vuong co canh " + m + " la" + Math.pow(m, 3) + "<br>");
}
bai3()

function bai4() {
    let a = parseFloat(prompt("Nhap canh a cua hinh chu nhat"));
    let b = parseFloat(prompt("Nhap canh b cua hinh chu nhat"));
    return document.write("Dien tich cua hinh chu nhat voi chieu dai hai canh a = " + a + ",b = " + b + " la" + a * b + "<br>");
}

bai4();

function bai5() {
    let a = parseFloat(prompt("Nhap canh goc gan a la "));
    let b = parseFloat(prompt("Nhap canh goc dai b la "));
    return document.write("Dien tich cua tam giac vuong voi chieu dai hai canh a = " + a + ",b = " + b + " la" + a * b / 2 + "<br>");
}

bai5();

function bai6() {
    //ax+b = 0
    var a = parseFloat(prompt("a "));
    var b = parseFloat(prompt("b "));
    var x = -b / a;
    if (a <= 0) {
        alert("Nhap lai a");
        a = parseFloat(prompt("a "));
    } else {
        document.write("Nghiem x = " + x);
    }
}

bai6();

function bai7() {
    //ax^2 + bx + c =0
    var a = parseFloat(prompt("a "));
    var b = parseFloat(prompt("b "));
    var c = parseFloat(prompt("c "));
    var delta = b * b - 4 * a * c;
    if (a < 0) {
        alert("Nhap lai a");
        a = parseFloat(prompt("a "));
    } else if (a == 0) {
        document.write("PT co nghiem kep x = " + x + "<br>");
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.write("PT co hai nghiem phan biet x1 = " + x1 + " ,x2 = " + x2 + '<br>');
    }
}
bai7();

function bai8() {
    var a = parseInt(prompt("Nhap tuoi vao "));
    if (0 < a && a < 120) {
        document.write("Tuoi cua nguoi la " + a + "<br>");
    } else {
        document.write(a + " khong la tuoi cua nguoi<br>");
    }
}

bai8();

function bai9() {
    var a = parseFloat(prompt("Nhap a "));
    var b = parseFloat(prompt("Nhap b "));
    var c = parseFloat(prompt("Nhap c "));
    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c && b + c > a && c + a > b) {
            document.write(a + ' ,' + b + ' ,' + c + ' la ba canh cua tam giac<br>');
        } else {
            document.write(a + ' ,' + b + ' ,' + c + ' khong la ba canh cua tam giac<br>');
        }
    } else {
        document.write("Nhap lai cac canh");
        a = parseFloat(prompt("Nhap a "));
        b = parseFloat(prompt("Nhap b "));
        c = parseFloat(prompt("Nhap c "));
    }
}

bai9();

function bai10() {
    var soDienTieuThu = parseFloat(prompt("Nhap so dien tieu thu"))
    if (0 < soDienTieuThu && soDienTieuThu < 10) {
        document.write("Tien dien cua " + soDienTieuThu + " la:" + soDienTieuThu * 3500 + " VND<br>");
    }
    if (10 <= soDienTieuThu && soDienTieuThu < 20) {
        document.write("Tien dien cua " + soDienTieuThu + " la:" + soDienTieuThu * 2800 + " VND<br>");
    } else {
        document.write("Tien dien cua  " + soDienTieuThu + " la:" + soDienTieuThu * 2300 + " VND<br>");
    }
}

bai10();

function bai11() {
    var tienLuong = parseInt(prompt("Nhap tien luong cua ban than (VND)"));
    if (0 <= tienLuong && tienLuong < 8000000) {
        document.write("Tien thue ca nhan la ", 0 + " VND<br>");
    } else if (8000000 <= tienLuong && tienLuong < 20000000) {
        document.write("Tien thue ca nhan la ", tienLuong * 8 / 100 + " VND<br>");
    } else {
        document.write("Tien thue ca nhan la ", tienLuong * 12 / 100 + " VND<br>");
    }
}

bai11();

function bai12() {
    var tienVay = parseInt(prompt("Nhap so tien vay"));
    var hanVay = parseFloat(prompt("Nhap vao so thang vay"));
    var laiSuat = parseFloat(prompt("Nhap vao lai suat hang thang"));
    var tienVayCongDon = tienVay;

    for (let i = 0; i < hanVay; i++) {
        let tinhLai = ((tienVayCongDon * laiSuat) / 100);
        tienVayCongDon += tinhLai;
    }
    document.write("Tien lai trong " + hanVay + " voi lai suat " + laiSuat
        + " cua " + tienVay + " la " + (tienVayCongDon - tienVay));
}

bai12();