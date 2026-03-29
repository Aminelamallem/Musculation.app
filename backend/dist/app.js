// Dans ton fichier serveur principal
import express from "express";
import cors from "cors";
import { route } from "./routes.js"; // Ton fichier de routes
const app = express();
app.use(cors()); // 1. Autorise React (port 5173) à parler à Express (port 3000)
app.use(express.json()); // 2. Permet de lire les données envoyées par fetch
app.use("/api", route);
app.listen(3000, () => console.log("Serveur sur port 3000"));
//# sourceMappingURL=app.js.map