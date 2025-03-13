# Tugas Relationship Flow

## Deskripsi

Tugas ini adalah implementasi dari diagram hubungan percintaan yang menggambarkan tahapan hubungan seseorang, mulai dari **SINGLE** hingga **MENIKAH** atau **PUTUS**. Program ini ditulis menggunakan **TypeScript** untuk mendefinisikan setiap tahapan hubungan dan transisi yang valid antara tahapan-tahapan tersebut.

## Diagram Hubungan

Berikut adalah tahapan-tahapan hubungan dalam diagram:

1. **SINGLE** → **KENALAN**
2. **KENALAN** → **TAARUF** atau **PDK**
3. **TAARUF** → **MENIKAH**
4. **PDK** → **KONFESS**
5. **KONFESS** → **PACARAN**
6. **PACARAN** → **LAMARAN** atau **SELINGKUH**
7. **SELINGKUH** → **PUTUS**
8. **LAMARAN** → **MENIKAH**
9. **MENIKAH** → Tidak ada transisi lebih lanjut.
10. **PUTUS** → Tidak ada transisi lebih lanjut.

## Teknologi yang Digunakan

- **TypeScript**: Untuk mendefinisikan enum dan transisi antar tahapan hubungan.
- **Node.js**: Untuk menjalankan aplikasi.

## Instalasi

1.  Clone repositori ini ke dalam direktori lokal Anda.

    ```bash
    git clone https://github.com/irpanzy/tugas-relationship-flow.git
    ```

2.  Masuk ke direktori proyek.

    ```bash
    cd tugas-relationship-flow
    ```

3.  Install semua dependensi yang diperlukan.

    ```bash
    npm install
    ```

4.  Compile file TypeScript ke JavaScript menggunakan TypeScript Compiler (TSC).

    ```bash
    npx tsc
    ```

5.  Jalankan aplikasi.

    ```bash
    node dist/app.js
    ```
    
