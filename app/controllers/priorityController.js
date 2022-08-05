module.exports = {
  index: async (req, res) => {
    try {
      const priorityData = ["Trivial", "Regular", "Urgent"];
      res.send({ error: false, priorityData });
    } catch (err) {
      console.log(`Error: `, err);
      res.status(errCode).send({ error: true, ...errObj });
    }
  },
};
