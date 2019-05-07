
var links = {
    "#bsi1" : "https://www.bsi.ir/MobileBank/hamrahbank/BSI_1.1.apk", 
    "#bsi2" : "https://apps.bsi.ir/Sapp%201.08.06.apk"
};

index = window.location.hash.toString();
to_link = links[index];
window. location = to_link;

