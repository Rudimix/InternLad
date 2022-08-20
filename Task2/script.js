var formElement = document.getElementById('formElement');
var inputs = formElement.querySelectorAll('input');
for(var i=0;i<inputs.length;i++){
  inputs[i].onfocus = function (evt) { 
    this.classList.add('focused');
  };
  inputs[i].onblur = function (evt) {
    this.classList.remove('focused');
  };
}