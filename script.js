// Ini Javascript

replaceName();

function replaceName() {
    let name = prompt("Halo siapakah nama anda?", "");
    document.getElementById("name"). innerHTML = name;
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceName()
})

function validateForm() {
    const name = document.forms["Message-form"]["full-name"].value;
    const birthDate = document.forms["Message-form"]["birth-date"].value;
    const gender = document.querySelector('input[name="gender"]:checked').id === "male" ? "Laki-laki" : "Perempuan";
    const messages = document.forms["Message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(index) {
    // Get DOM semua Image Banner
    let listImage = document.getElementsByClassName('photo-banner');
    console.log(indexSlide);
    console.log(listImage);

    // Reset IndexSlide
    if (index > listImage.length) indexSlide = 1


    //Hide All Images
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    // Show Selected Images
    listImage[indexSlide - 1].style.display = 'block';
}

// Autorun Banner Photo
setInterval(() => nextSlide(1), 2000);