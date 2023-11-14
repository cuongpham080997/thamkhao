//* CAR
const CAR_1 = 8_000;
const CAR_1_19Km = 7_500;
const CAR_TREN_19km = 7_000;
const CAR_CHO = 2_000;

//* SUV
const SUV_1 = 9_000;
const SUV_1_19Km = 8_500;
const SUV_TREN_19km = 8_000;
const SUV_CHO = 3_000;

//* BLACK
const BLACK_1 = 10_000;
const BLACK_1_19Km = 9_500;
const BLACK_TREN_19km = 9_000;
const BLACK_CHO = 3_500;

function domID(id) {
  return document.getElementById(id);
}

function tinhGiaTienSoKmDiDuoc(car, soKmDiDuoc) {
    var giaDauTien = 0;
    var gia1_19 = 0;
    var giaTren19 = 0;

    switch (car) {
        case "CAR":
            giaDauTien = CAR_1;
            gia1_19 = CAR_1_19Km;
            giaTren19 = CAR_TREN_19km;
          break;
        case "SUV":
            giaDauTien = SUV_1;
            gia1_19 = SUV_1_19Km;
            giaTren19 = SUV_TREN_19km;
          break;
    
        case "BLACK":
            giaDauTien = BLACK_1;
            gia1_19 = BLACK_1_19Km;
            giaTren19 = BLACK_TREN_19km;
          break;
        default:
    }

    var soTien = 0;
    if(soKmDiDuoc <=1){
        soTien = giaDauTien*soKmDiDuoc

    }else if (soKmDiDuoc > 1 && soKmDiDuoc <=19){
        soTien = giaDauTien + (soKmDiDuoc-1)*gia1_19;

    }else if (soKmDiDuoc >19){
        soTien = giaDauTien + 18*gia1_19 + (soKmDiDuoc-19)*giaTren19;
    }

    return soTien;

}

function tinhGiaTienThoiGianCho(car, tgCho) {
  var giaTienCho = 0;
  switch (car) {
    case "CAR":
      giaTienCho = CAR_CHO;
      break;
    case "SUV":
      giaTienCho = SUV_CHO;
      break;

    case "BLACK":
      giaTienCho = BLACK_CHO;
      break;
    default:
      giaTienCho = 0;
  }

  var soLanCho = Math.floor(tgCho / 3);
  var soTien = soLanCho * giaTienCho;
  return soTien;
}


// IDXe = ['grabCar','grabSUV','grabBlack']

// loaiXe = ''
// for (xe in IDXe) {
//     if (domID(xe).checked){
//         loaiXe = xe
//         break;
//     }

// }

domID('btnGrab').onclick = function(){
    var loaiXe = ''
    var isCar = domID('grabCar').checked;
    var isSUV = domID('grabSUV').checked;
    var isBlack = domID('grabBlack').checked;

    if(isCar)
        loaiXe = 'CAR';
    if(isSUV)
        loaiXe = 'SUV'
    if(isBlack)
        loaiXe = 'BLACK'

    var soKmDiDuoc = Number(domID('soKm').value);
    var soThoiGianCho = Number(domID('time').value)

    var tongTien = 
        tinhGiaTienSoKmDiDuoc(loaiXe,soKmDiDuoc) +
        tinhGiaTienThoiGianCho(loaiXe,soThoiGianCho);
    
    domID('divThanhTien').style.display = 'block'
    domID('xuatTien').innerHTML = tongTien;
}