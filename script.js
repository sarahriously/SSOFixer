
var link = document.createElement('link');
link.href = "https://fonts.googleapis.com/css?family=Open+Sans:300";
link.rel = "stylesheet";
(document.head||document.documentElement).appendChild(link);

document.getElementsByTagName("TITLE")[0].text = "Student Services Online";
document.getElementsByClassName("ps_footer")[0].style.visibility = "hidden";
