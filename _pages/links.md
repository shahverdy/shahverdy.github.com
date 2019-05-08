---
layout: null
permalink: /0
redirect_from:
  - /1
  - /2
  - /3
  - /4
  - /5
  - /6
  - /7
  - /8
  - /9

---
<script>


var links = [
    "https://apps.bsi.ir", 
    "https://www.bsi.ir/MobileBank/hamrahbank/BSI_1.1.apk", 
    "https://apps.bsi.ir/Sapp%201.08.06.apk"
];

ref = document.referrer;
path = ref.split("mostafa.info/");
if(path.length > 1 )
    index = path[1];
    //index = window.location.pathname;
else
    exit;

to_link = links[index];

if(to_link)
    window.location = to_link;
else
    window.location = "http://www.mostafa.info";
    



</script>
