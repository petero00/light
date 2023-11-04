let A = 1;
document.getElementById("botan").onclick = function(){
    if(A === 1){
        document.getElementById("den").src = "https://2.bp.blogspot.com/-YKil1-Ct5k4/VrN1Gs5S_PI/AAAAAAAA3xI/qmS23ghLyBE/s800/denkyuu_eco.png"
        A = 2;
    }else{
        document.getElementById("den").src = "https://2.bp.blogspot.com/-bB1KTaBEAm0/VrN1H-lrLFI/AAAAAAAA3xQ/2HKUMC-7kGw/s800/denkyuu_off.png"
        A = 1;
    }
}
