//Title constructor function that creates a Title object
$(document).ready(function() {
  $(".dropDownTextArea").hide();
  $(".sub_btn").css("backgroundColor", "gray").css("border", "2px solid gray");
  $(".sub_btn").prop("disabled",true);
  $(".del_btn").hide();
  $("img").click(function() {
    $(this).parent().parent().next().toggle("details");
  });
function checkedRow() {
    var checks = document.getElementsByName("check");
    for(var i = 0; i<checks.length; i++)
        {
          checks[i].onclick=function()
          {
            this.parentElement.parentElement.classList.toggle("checked")
            
          };
            
        }
  }
  checkedRow();
  $(".box").click(function() {
    if ($(".box").is(":checked")) {
      $(".sub_btn").css("backgroundColor", "orange").css("border", "2px solid orange");
      $(".sub_btn").prop("disabled",false);
      $(this).closest('tr').find('.del_btn').show();
    }
    else {
      $(".sub_btn").css("backgroundColor", "gray").css("border", "2px solid gray");
      $(".sub_btn").prop("disabled",true);
      $(".del_btn").hide();
    }
    });

    $(".del_btn").click(function() {
      $(this).closest('tr').remove();
    });

    $('#add').click(function() {
      $('#myTable').append('<tr><td><input class = "box" type="checkbox" name = "check"><br /><br /><img src="down.png" width="25px" /></td><td>Student 4</td><td>Teacher 4</td><td>Approved</td><td>Fall</td><td>TA</td><td>39845</td><td>100%</td><td><button class="del_btn" id = "tblBtn4">Delete</button></td></tr>');
    }); 
});