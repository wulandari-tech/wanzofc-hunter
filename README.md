# 🌈 wanzofc-hunter 🌈

**utilitas sederhana untuk mendeteksi & membersihkan string dari potensi serangan xss.**

---

## 💡 deskripsi

`wanzofc-hunter` adalah library javascript ringan yang membantu anda mengamankan aplikasi web anda dari serangan *cross-site scripting* (xss). library ini menyediakan fungsi untuk mendeteksi pola-pola xss yang umum dan membersihkan string dari kode berbahaya.

## 📦 instalasi

```bash
npm install wanzofc-hunter

```
## 🚀 PENGGUNA use.js


const { detectxss, sanitizestring, escapehtml } = require('wanzofc-safe-string');
const userinput = '<img src="javascript:alert(1)">halo!';
const xssinfo = detectxss(userinput);
if (xssinfo) console.warn("🔥 potensi xss terdeteksi:", xssinfo);
try {
  const aman = sanitizestring(userinput, {
    throwerror: true,
    logtoservice: true,
    aggressivesanitization: false, // kalo mau true untuk hapus semua tag ya memek
  });
  console.log("✅ string yang sudah dibersihkan:", aman);
} catch (error) {
  console.error("❌ error:", error.message);
}
const escaped = escapehtml("<p>ini tag html</p>");
console.log("✨ escaped html:", escaped);

IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
JavaScript
IGNORE_WHEN_COPYING_END
⚙️ opsi konfigurasi
opsi	deskripsi	default
throwerror	jika true, akan melempar error jika xss terdeteksi.	false
logtoservice	jika true, akan mengirim informasi tentang xss yang terdeteksi ke layanan pemantauan (anda perlu mengimplementasikannya).	false
aggressivesanitization	jika true, akan menghapus semua tag html dari string. gunakan dengan hati-hati!	false
⚠️ peringatan penting

tidak ada jaminan keamanan penuh: library ini membantu, tapi bukan jaminan 100% aman dari semua serangan xss. xss terus berkembang, jadi selalu berhati-hati.

perbarui secara berkala: daftar pola xss perlu diperbarui secara berkala.

validasi sisi server: selalu validasi input di sisi server juga.

gunakan dengan bijak: pertimbangkan trade-off antara keamanan dan kegunaan.

🤝 kontribusi

terbuka untuk kontribusi! silakan kirim pull request atau laporkan issue di github.

📄 lisensi

mit

## dibuat dengan ❤️ oleh tim wanzofc
