import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.route.js";
import planetsRoutes from "./routes/planets.route.js";
import quizRoutes from "./routes/quiz.route.js";
import favouritesRoutes from "./routes/favourites.route.js";

import { ENV_VARS } from "./config/envVar.js";
import { connectDB } from "./config/db.js";

const app = express();
// dotenv.config();
const PORT = ENV_VARS.PORT;
// const __dirname = path.resolve();

app.use(express.json()); // hey express, parse incoming requests with JSON payloads
app.use(cookieParser()); // hey express, parse cookies
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://nasa-space-apps-exoplanet-exploration-bdmi.vercel.app",
    ],
    // origin: [
    //   "http://localhost:5173", // hey express, allow requests from this origin
    //   "https://shoob-pass-secure-store-wrqx.vercel.app" // Production URL
    // ],
    credentials: true, // hey express, allow cookies to be sent back and forth
  })
);

app.use("/api/auth", authRoutes); // hey express, use the authRoutes for any requests that start with /api/auth
// this is done to keep the codebase clean and modular
app.use("/api/planets", planetsRoutes); // hey express, use the planetsRoutes for any requests that start with /api/planets

app.use("/api/quiz", quizRoutes); // hey express, use the quizRoutes for any requests that start with /quiz
// console.log(process.env.MONGODB_URI);

app.use("/api/favourites", favouritesRoutes); // hey express, use the planetsRoutes for any requests that start with /api/planets

// to serve the frontend in production
// so with this we can access the react app using the port of the backend

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/dist"))); // dist is from running build from the package.json in the frontend  and __dirname means under root
//   app.get("*", (req, res) => {
//     // for any other routes other than the backend api routes
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//     path.resolve(__dirname, "frontend", "build", "index.html");
//   });
// }

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT);
  connectDB();
});



app.get('/' , (req , res)=>{
   res.send('hello from simple server :)')
})
