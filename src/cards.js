function readOnlyCheckBox() {
  let checkbox = document.getElementById("curtain-trigger");
  checkbox.disabled = false;

  return false;
}

function changeaction(obj) {
  debugger;
  let isChecked = obj.checked;
  if (isChecked) {
    obj.disabled = true;
  }
}
