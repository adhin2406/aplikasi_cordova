function tampil_data() {
    const xhr = new XMLHttpRequest();
    const url = "http://127.0.0.1:8000/api/data_siswa";
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("data_siswa").innerHTML = this.responseText;
            console.log(this.responseText);
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}