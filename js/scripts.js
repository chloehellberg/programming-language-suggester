$(document).ready(function() {
  $("#quiz").submit(function(event) {

    const q1 = parseInt($("input:radio[name=q1]:checked").val());
    const q2 = parseInt($("input:radio[name=q2]:checked").val());
    const q3 = parseInt($("input:radio[name=q3]:checked").val());
    const q4 = parseInt($("input:radio[name=q4]:checked").val());
    const q5 = parseInt($("input:radio[name=q5]:checked").val());
    
    const result = (q1+q2+q3+q4+q5);
    console.log(result);

    // JavaScript === 5-8
    // Python === 9-12
    // C# ===  13-15

    if (result <= 8) {
      alert ("Javascript");
    } 
    else if (result <= 12 && result >=9) {
      alert ("Python");
    }

    else {
      alert ("C#");
    }


    event.preventDefault();
  });
});
