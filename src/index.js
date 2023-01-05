//Here we're importing items we'll need. You can add other imports here.

//The first function. Remove this.
const btn = document.querySelector("button");
btn.onclick = function () {
  alert("You ran some JavaScript");
};

const filePicker = document.getElementById("filePicker");
filePicker.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files;
  let reader = new FileReader();
  reader.onload = onReaderLoad;
  let data = reader.readAsText(fileList[0]);

  function onReaderLoad(event) {
    console.log(event.target.result);
    var obj = JSON.parse(event.target.result);
    console.log(obj);
  }

  console.log(fileList); /* now you can work with the file list */
  console.log(data); /* now you can work with the file list */
}
