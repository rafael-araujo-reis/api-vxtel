exports.get = (req, res, next) => {
  res.status(201).send(`Request received with success`);
};

exports.post = (req, res, next) => {
  res.status(201).send(`Request received with success`);
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Request received with success ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Request received with success ${id}`);
};