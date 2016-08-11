$(document).ready(function() {
  //ALL CODE GOES IN HERE
  $("#search-bar").click(function(){
    $(this).css({"background-image": "none"});
    $(this).attr("placeholder", "")
    // $(this).css({"padding-left": "5px"});
  })

  $("#search-bar").blur(function(){
    $(this).css({"background-image": "url(./images/google-logo.png)"})
    $(this).attr("placeholder", "SEARCH CAMPUS")
    // $(this).css({"padding-left": "80px"});
  })

});
