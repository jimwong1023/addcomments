// Shorthand for document ready
$(function(){
  var i = 0;
  $('#new_comment_button').click(function(){

    $('#new_comment_button').hide();

    var new_comment = $('<form id= "new_comment"> \
          Comment<textarea id="com" name="comment"></textarea><br> \
          Author<br><input id= "author" type= "text" name= "author"> \
          <input id= "submit" type= "submit" value= "submit"> \
        </form>')

    $("#comment_list").append(new_comment)

    $(new_comment).submit(function(event){

      event.preventDefault();

      var comment = $(this).find("#com").val();
      var author = $(this).find("#author").val();
      if (comment != "") {
        $("#new_comment").remove();
        $("#comment_list").append(
          '<li id= "comment">' +
            comment +
            '<span class="author">' + author + '</span> </li>'
          );
        $('#new_comment_button').show();
      }
    })
  });
});
