

var links = {
    "bsi" : "http://bsi.ir/", 
    "bmi" : "http://bmi.ir"
};

var to_link = links[window.location.hash];
window.location = links[to_link];
