import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

// Define program-related routes
import programActions from "./modules/programs/programsActions";

router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);

// Define category-related routes
import categoryActions from "./modules/category/categoryActions";

router.get("/api/categories", (req, res) => {
  const categories = categoryActions.browse();
  res.json(categories);
});

router.get("/api/categories/:id", (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const category = categoryActions.read(id);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Catégorie non trouvée" });
  }
});

/* ************************************************************************* */

// Declaration of a "Welcome" route
import sayActions from "./modules/say/sayActions";

router.get("/", sayActions.sayWelcome);

/* ************************************************************************* */

export default router;
