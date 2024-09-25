const soma = (req, res) => {
  const soma = 20 + 8;

  res.send({ soma: soma });
};

module.exports = { soma };
