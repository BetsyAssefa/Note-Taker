const express = require("express");
const apiRoutes = require("./Routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Use routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
