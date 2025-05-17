const AUTH_TOKEN = "xyz123"; // Simulated token (in real use, store securely)

const authenticate = (req, res, next) => {
    const { token } = req.query;

    if (!token || token !== AUTH_TOKEN) {
        return res.status(401).json({ error: "Unauthorized: Invalid or missing token" });
    }

    next();
};

export default authenticate;
