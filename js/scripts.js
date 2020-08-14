$(document).ready(function() {
  $("#quiz").submit(function(event) {

    const question1 = parseInt($("input:radio[name=question1]:checked").val());
    const question2 = parseInt($("input:radio[name=question2]:checked").val());
    const question3 = parseInt($("input:radio[name=question3]:checked").val());
    const question4 = parseInt($("input:radio[name=question4]:checked").val());
    const question5 = parseInt($("input:radio[name=question5]:checked").val());
    
    const total = (question1+question2+question3+question4+question5);
    

    // JavaScript === 5-8 range
    // Python === 9-12 range
    // C# ===  13-15 range

    if (total <= 8) {
      $("#javascript").show();
      $("#python").hide();
      $("#c").hide();
      $("#quiz").hide();
    } 
    else if (total <= 12 && total >=9) {
      $("#python").show();
      $("#javascript").hide();
      $("#c").hide();
      $("#quiz").hide();
    }
    else {
      $("#c").show();
      $("#python").hide();
      $("#javascript").hide();
      $("#quiz").hide();
    }

    event.preventDefault();
  });

  $(".btn-danger").click(function() {
    location.reload();

  });
});

