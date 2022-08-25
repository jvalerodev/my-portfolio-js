const validate = (schema, handler) => {
  return async (req, res) => {
    try {
      await schema.validate(req.body);
    } catch (error) {
      console.log(error.errors);
      return res.status(404).json({ success: false, msg: 'All fields are required.' })
    }

    return handler(req, res);
  };
};

export default validate;