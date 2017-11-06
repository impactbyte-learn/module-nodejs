# Node.js Module

--------------------------------------------------------------------------------

## Module built-in

Node.js punya beberapa module yang bisa langsung kita pakai

```js
require("path")
require("fs")
require("http")
require("assert")
```

Yang secara lengkap dijelaskan di dokumentasinya https://nodejs.org/api/modules.html

--------------------------------------------------------------------------------

## Import dan export module

Kita bisa mengimpor module built-in tersebut.

```js
const path = require("path") // tidak perlu menulis ekstensinya
```

Ataupun module yang kita buat sendiri nantinya.

```js
const something = require("./something")
```

--------------------------------------------------------------------------------

## npm

Di dunia Node, package dan dependency manager utamanya adalah npm https://npmjs.com

npm sendiri merangkap sebagai website, registry, platform, dan ekosistem Node.

Dependency adalah suatu unsur metode untuk memisahkan dan mengintegrasikan berbagai program berbeda menjadi program yang utuh.

Kita bisa menggunakan `npm` di terminal

```sh
$ npm -v
5.5.0
```

--------------------------------------------------------------------------------

## Mengakses npm

Untuk menjadikan project Node kita bisa mengakses berbagai module yang ada di npm, kita perlu menginisialisasi file `package.json`, sebuah file config yang akan menyimpan metadata project kita.

Sebelumnya, buatlah folder khusus terlebih dahulu.

```sh
npm init
# kita akan ditanyakan berbagai pertanyaan
# isilah sesuai preferensi
```

Setelah itu kita akan lihat file `package.json` yang berisi seperti:

```json
{
  "name": "application",
  "version": "1.0.0",
  "description": "An application",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Full Name <name@domain.com> (https://domain.com)",
  "license": "MIT"
}
```

--------------------------------------------------------------------------------

## Cara instalasi module/package dengan npm

1. **Instal sebagai dependency biasa**: Dilakukan saat menggunakan module sebagai library yang akan digunakan secara langsung di aplikasi kita.
2. **Instal sebagai dependency development**: Dilakukan saat menggunakan module sebagai utility yang digunakan di project/repo, tidak secara langsung di dalam aplikasi kita.
3. **Instal sebagai aplikasi/CLI global**: Dilakukan saat menjadikan module sebagai program yang dapat digunakan di manapun, bukan sebagai library di dalam aplikasi

Normal | Lebih pendek
-------|-------------
`npm install --save package` | `npm i -S package`
`npm install --save-dev package` | `npm i -D package`
`npm install --global package` | `npm i -g package`

Cara uninstall bisa melalui `npm uninstall` atau mengedit `package.json`.

--------------------------------------------------------------------------------

## Menggunakan module yang sudah terinstal

Instal suatu module sebagai library.

```sh
npm install --save ramda
```

Lihatlah perubahan pada file `package.json` dan adanya folder `node_modules/` folder.

Pada repositori Git, folder `node_modules` ini HARUS di-ignore.

Gunakan module tersebut di aplikasi kita.

```js
const R = require("ramda")

const result = R.add(1, 2)

console.log(result)
```

Lalu jalankan.

```sh
$ node index.js
3
```
