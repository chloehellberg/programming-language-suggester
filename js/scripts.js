$(document).ready(function() {
  $("#quiz").submit(function(event) {

    const q1 = parseInt($("input:radio[name=q1]:checked").val());
    const q2 = parseInt($("input:radio[name=q2]:checked").val());
    const q3 = parseInt($("input:radio[name=q3]:checked").val());
    const q4 = parseInt($("input:radio[name=q4]:checked").val());
    const q5 = parseInt($("input:radio[name=q5]:checked").val());
    


    event.preventDefault();
  });
});