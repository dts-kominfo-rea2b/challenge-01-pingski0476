// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
//monic
let edumonic1 = {
    nama: "SD 01",
    city: "Jakarta",
    graduate: 2016,
}

let edumonic2 = {
    nama: "SMP 02",
    city: "Jakarta",
    graduate: 2019,
}
    
let edumonic3 = {
    nama: "SMA 03",
    city: "Tangerang",
}

let restaurant = ["Bento","Sushi","Pancake","Tempura","Eggy","Padang","Tteok"];
//endmonic

//wendy
let eduwendy1 = {
    name: "SD 02",
    city: "Jakarta",
    graduate: 2010,
}

let eduwendy2 = {
    name: "SMP 03",
    city: "Bogor",
    graduate: 2013,
}

let eduwendy3 = {
    name: "SMA 01",
    city: "Surabaya",
    graduate: 2016,
}

let eduwendy4 = {
    name: "Universitas Maju",
    city: "Tangerang",
}

let favwendy = ["Tempura","Bento","Sushi","Pancake","Padang","Katsu","Geprek","Eggy"];
//endwendy

const firstUser = {
    name: "Monica",
    gender: "Female",
    age : 17,
    email: "monica@dingdong.com",
    favoriteColor: ["Yellow", "Pink", "White", "Purple"],
    isHavePet: "Yes",
    education: [edumonic1,edumonic2,edumonic3],
    favoriteRestaurant: restaurant
};
const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: "23",
    email: "wendy@dingdong.com",
    favoriteColor: ["Blue", "Black", "Grey"],
    isHavePet: "No",
    education: [eduwendy1,eduwendy2,eduwendy3,eduwendy4],
    favoriteRestaurant:favwendy
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};