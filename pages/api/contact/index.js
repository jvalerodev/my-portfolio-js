const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      return res.status(200).json({ success: true });

    default:
      res.status(500).json({ msg: 'Invalid request type' });
  }
};

export default handler;