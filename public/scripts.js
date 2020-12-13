    // get the about modal
    var modal = document.getElementById("aboutModal");
    var mailModal = document.getElementById("mailModal");

    // get the button to open the modal
    var btn = document.getElementById("aboutBtn");
    var mailBtn = document.getElementById("mailBtn");

    // get the close modal span
    var span = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close")[1];

    // open modal when user clicks btn
    btn.onclick = function () {
      modal.style.display = "block";
    }
    mailBtn.onclick = function () {
      mailModal.style.display = "block";
    }

    // close modal when user clicks close
    span.onclick = function () {
      modal.style.display = "none";
    }
    span2.onclick = function () {
      mailModal.style.display = "none";
    }