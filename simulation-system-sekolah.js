function explore(option) {
    const result = document.getElementById("result");
    let message = "";
    switch (option) {
        case "Kurikulum":
            message = "Fokus pada minat siswa meningkatkan motivasi belajar.";
            break;
        case "Penilaian":
            message = "Proyek berbasis praktik lebih mencerminkan kemampuan nyata.";
            break;
        case "Metode Pengajaran":
            message = "Pembelajaran berbasis proyek membuat siswa lebih aktif.";
            break;
        case "Kesejahteraan Siswa":
            message = "Waktu istirahat yang cukup meningkatkan fokus belajar.";
            break;
        default:
            message = "Silakan pilih elemen sistem yang ingin dieksplorasi.";
    }
    result.innerHTML = `<p>${message}</p>`;
}
