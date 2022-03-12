// var db;
// const databaseName = "http://127.0.0.1:8000/api/data_siswa";
// const databaseVersion = 1;
// const openRequest = window.indexedDB.open(databaseName, databaseVersion);
// openRequest.onerror = function () {
//     console.log(openRequest.errorCode);
// }
// openRequest.onsuccess = function () {
//     db = openRequest.result;
// }
// openRequest.onupgradeneeded = function (event) {
//     const db = event.target.result;
//     db.onerror = function () {
//         console.log(db.errorCode);
//     };
//     var store = db.createObjectStore('pelajar', {
//         keyPath: 'id_siswa'
//     });
//     store.createIndex('firstName', 'firstName', {
//         unique: false
//     });
//     store.createIndex('lastName', 'lastName', {
//         unique: false
//     });
//     store.createIndex('street', 'street', {
//         unique: false
//     });
//     store.createIndex('city', 'city', {
//         unique: false
//     });
//     store.createIndex('zipCode', 'zipCode', {
//         unique: false
//     });
//     store.createIndex('country', 'country', {
//         unique: false
//     });
//     // Once the store is created, populate it
//     store.transaction.oncomplete = function (event) {
//         var customerStore = db.transaction('siswa', 'readwrite').objectStore('pelajar');
//         pelajar.forEach(function (pelajar) {
//             customerStore.add(pelajar);
//         });
//     };
// };


$(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:8000/api/data_siswa"
    }).then(function (data) {
        $(".nama").append(data.data['nama']);
    })
});