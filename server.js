import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("🎓 University API is running!");
});

app.get("/api/simple", (req, res) => {
  res.json({ university: "EduVerse", location: "Delhi", rank: 5 });
});

app.get("/api/fees", (req, res) => {
  res.json({
    BTech: { range: "₹1.5L - ₹2L per year" },
    MBA: { range: "₹2L - ₹2.5L per year" },
    BCA: { range: "₹1L - ₹1.5L per year" }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
