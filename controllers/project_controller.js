/**
 * Project controller : All business logic goes here
 */

const Project = require("../models/project_model");
const bcrypt = require("bcryptjs");

/**
 * this method is to create the Project
 */ 
exports.create = (req, res) => {
  /**
   * validation request
   */
  if (!req.body.name) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  /**
   * Create a Project
   */
  const project = new Project({
    name: req.body.email,
    description: req.body.description,
    teams: req.body.teams,
    tags: req.body.tags,
    createdAt: req.body.createdAt,
    createdBy: req.body.createdBy,
    isActive: req.body.isActive,
  });
  /**
   * Save Project to database
   */
  project
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Project.",
      });
    });
};
/** 
 * Find all Project
 */
// exports.findAll = (req, res) => {
//     User.find()
//       .sort({ name: -1 })
//       .then((users) => {
//         res.status(200).send(users);
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message: err.message || "Error Occurred",
//         });
//       });
//   };
  /**
 * Find one Project
 */
// exports.findProject = (req, res) => {
  
//   project.findById(req.params.id)
//       .then((project) => {
//         if (!project) {
//           return res.status(404).send({
//             message: "Project not found with id " + "userId"+ req.params.id,
//           });
//         }
//         res.status(200).send(project);
//         console.log(project);
//       })
//       .catch((err) => {
//         return res.status(500).send({
//           message: "Error retrieving Project with id " + req.params.id,
//         });
//       });
//   };
  /**
 * Delete a Project with the specified id in the request
 */
// exports.delete = (req, res) => {
//     User.findByIdAndRemove(req.params.id)
//       .then((user) => {
//         if (!user) {
//           return res.status(404).send({
//             message: "User not found ",
//           });
//         }
//         res.send({ message: "User deleted successfully!" });
//       })
//       .catch((err) => {
//         return res.status(500).send({
//           message: "Could not delete user ",
//         });
//       });
//   };
  /**
 * Update a Project with the specified id in the request
 */
// exports.UpdateUser = (req, res) => {
//     if (!req.body.email || !req.body.password || !req.body.name) {
//       res.status(400).send({
//         message: "required fields cannot be empty",
//       });
//     }
//     User.findByIdAndUpdate(req.params.id, req.body, { new: true })
//       .then((user) => {
//         if (!user) {
//           return res.status(404).send({
//             message: "no user found",
//           });
//         }
//         res.status(200).send(user);
//       })
//       .catch((err) => {
//         return res.status(404).send({
//           message: "error while updating the post",
//         });
//       });
//   };