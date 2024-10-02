const Person = require("../models/person.model");

const addPersonInfo = async (req, res) => {
  try {
    const person = await Person.create(req.body);
    res.status(200).json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPeopleInfo = async (_req, res) => {
  try {
    const person = await Person.find({});
    res.status(200).json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPersonInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Person.findById(id);
    res.status(200).json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updatePersonInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Person.findByIdAndUpdate(id, req.body);
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }
    // query db again for updated value
    const updatedPerson = await Person.findById(id);
    res.status(200).json(updatedPerson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletePersonInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Person.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.status(200).json({ message: "Person deleted sucessfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addPersonInfo,
  getPeopleInfo,
  getPersonInfo,
  updatePersonInfo,
  deletePersonInfo,
};
