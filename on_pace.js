console.log("Hi");



var form = document.getElementById('myForm');
form.onsubmit = function(event){
  event.preventDefault();
  var current_tot = parseInt(form.ct.value);
  var current_played = parseInt(form.gp.value);
  var total_played = parseInt(form.tg.value);

  if(current_played > total_played){
    alert("Games played can't be more than total games in season.")
  }

  var proj = (parseFloat(current_tot) / parseFloat(current_played)) * parseFloat(total_played);
  console.log(proj);

  var textOutput = document.getElementById('answer');
  var fixedProj = proj.toFixed(3)
  textOutput.value = fixedProj;
}
