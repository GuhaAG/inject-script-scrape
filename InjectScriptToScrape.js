
document.oncontextmenu = function() {
    return false;
 };

$(document).mousedown(function(e){
  if( e.button == 2 ) {
    var target = e.target || e.srcElement;
    markRelevant(window.location.href,target.outerHTML);

    return false;
  }
  return true;
});

function markRelevant(url,htmlDetails){
  //replace alert with ajax call using jquery ajax to send the information to a REST end-point
  alert(url+" || "+htmlDetails);
}
