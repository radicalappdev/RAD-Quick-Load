//Here we're importing items we'll need. You can add other imports here.

const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.onload = function (event) {
    const contents = event.target.result;
    const json = JSON.parse(contents);
    console.log(json);

    var loaded = JSON.parse(contents);
  };
  reader.readAsText(file);
});
