// server/src/modules/programs/programs.routes.ts
import { Router } from "express";
import programsController from "./programs.controller";

const router = Router();

// GET /api/programs
router.get("/", programsController.browse);

export default router;
