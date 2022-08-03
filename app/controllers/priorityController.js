module.exports = {
  index: async (req, res) => {
    try {
      const priorityData = ["Acil", "Önemli", "Normal"];
      res.send({ error: false, priorityData });
    } catch (err) {
      console.log(`Error: `, err);
      res.status(errCode).send({ error: true, ...errObj });
    }
  },
};
