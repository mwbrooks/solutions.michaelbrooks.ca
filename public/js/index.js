jQuery.fn.liveFilter = function(parentElement) {
  parentElement = $(parentElement);
  var rows      = parentElement.children();
  var cache     = rows.map(function() {
    return $.trim( $(this).text().toLowerCase().replace(/\s+/g, ' ') );
  });
  
  $(this).keyup(function() {
    var inputValue = $(this).val().toLowerCase().replace(/\s+/g, ' ');
    
    cache.each(function(i) {
      (this.indexOf( inputValue ) > -1) ? $(rows[i]).show() : $(rows[i]).hide();
    });
  });
};

$(document).ready(function(e) {
  $("input:text:visible:first").focus();
  
  $('input:text:visible:first').liveFilter($('#articles'));
});