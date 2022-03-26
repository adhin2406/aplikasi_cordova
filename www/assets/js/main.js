$(document).on("click", "#btn_edit", function () {
    const id_siswa = $(this).attr("data-id");
    sessionStorage.setItem("id_siswa", id_siswa);
    // $.ajax({
    //     url: "http://127.0.0.1:8000/api/data_siswa/" + id_siswa,
    //     type: "GET",
    //     cache: false,
    //     success: function (result) {
    //         console.log(result.data.nama);
    //     }
    // });
});