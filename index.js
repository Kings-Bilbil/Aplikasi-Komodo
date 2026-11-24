const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    service: "aplikasi-tes",
    version: "1.1.0",
    message: "Auto-deployment CI/CD Komodo + GitHub Actions berhasil diperbarui!",
    pipeline: "GitHub Actions -> GHCR (ARM64) -> Komodo Auto-Deploy",
    mahasiswa: "Nabil Nur Fauzan (H1101241046)",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server aplikasi-tes berjalan pada http://0.0.0.0:${port}`);
});
