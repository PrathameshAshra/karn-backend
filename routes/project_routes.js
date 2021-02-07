const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");

const Project = require("../models/project_model");
const Component = require("../models/component_model");
const ProjectType = require("../models/projecttype_model");

/**
 * @method - POST
 * @param - /
 * @description - Creates Project
 */

router.post(
  "/",
  [check("name", "Please Enter a Valid Project Name").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    let {
      name,
      description,
      teams,
      tags,
      createdAt,
      createdBy,
      isActive,
    } = req.body;
    try {
      isActive = true;
      let project = await Project.findOne({
        name,
      });
      if (project) {
        return res.status(400).json({
          msg: "Project Already Exists",
        });
      }

      project = new Project({
        name,
        description,
        teams,
        tags,
        createdAt,
        createdBy,
        isActive,
      });

      await project.save();
      res.send(project);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);
/**
 * @method - POST
 * @param - /component
 * @description - Adds Component 
 */

router.post(
  "/component",
  [check("name", "Please Enter a Valid Component Name").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    let {
      name,
      projectId,
      description,
      inputParamName,
      inputParamDescription,
      inputParamValue,
      outPutParamName,
      outPutParamValue,
      outPutParamDescription,
      lifeCycle,
      createdAt,
      createdBy,
      isActive,
      isGlobal
    } = req.body;
    try {
      isActive = true;
      let component = await Project.findOne({
        name,
      });
      if (component) {
        return res.status(400).json({
          msg: "Component Already Exists",
        });
      }

      component = new Component({
        name,
        projectId,
        description,
        inputParamName,
        inputParamDescription,
        inputParamValue,
        outPutParamName,
        outPutParamValue,
        outPutParamDescription,
        lifeCycle,
        createdAt,
        createdBy,
        isActive,
        isGlobal
      });

      await component.save(); 
      console.log(component)
      res.send(component);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);

/**
 * @method - GET
 * @param - /me
 * @description - Finds projects by UserId 
 */
router.get("/me/:userId", auth, async (req, res) => {
  let userId = req.params.userId
  try {
    const user = await  Project.find({createdBy: userId});
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" ,e});
  }
});
/**
 * @method - GET
 * @param - /type 
 * @description - List of Types of Projects 
 */
router.get("/type", auth, async (req, res) => {
  try {
    const type = await  ProjectType.find();
    res.json(type);
  } catch (e) {
    res.send({ message: "Error in Fetching type" ,e});
  }
}); 
/**
 * @method - Post
 * @param - /type 
 * @description - Inserts Type Category 
 */

router.post(
  "/type",
  [check("name", "Please Enter a Valid Type Name").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    let {
      name,
    } = req.body;
    try {
     
      let component = await ProjectType.findOne({
        name,
      });
      if (component) {
        return res.status(400).json({
          msg: "ProjectType Already Exists",
        });
      }

      projectType = new ProjectType({
        name,
       
      });

      await projectType.save(); 
      console.log(projectType)
      res.send(projectType);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);
  
module.exports = router;
