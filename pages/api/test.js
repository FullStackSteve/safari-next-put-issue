const handleRequest = (req, res) => {
  // res.setHeader("Content-Type", "application/json");

  if (req.method === "POST") {
    res.status(200).json({ message: "Successful POST" });

    return;
  }

  if (req.method === "PUT") {
    res.status(200).json({ message: "Successful PUT" });

    return;
  }

  res.setHeader("Allow", "POST, PUT");
  res.status(405).end();
};

export default handleRequest;
