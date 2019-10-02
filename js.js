$('.carousel1').carousel({
      interval: 5000,
      keyboard: true,
      pause: 'hover',
      wrap: true
    })
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
var newPopup=window.open("","PopupWindow","height=250,width=250");
var popContent='<HTML><HEAD><TITLE>GetSmart</TITLE></HEAD><BODY MARGINWIDTH=0 MARGINHEIGHT=0 LEFTMARGIN=0 TOPMARGIN=0 BOTTOMMARGIN=0>';
popContent+= '<a target="_blank" href="www.google.com" ></a>';
popContent+='</BODY></HTML>';
newPopup.document.write(popContent);
newPopup.document.close();
newPopup.focus();