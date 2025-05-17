const validateQuery = (req, res, next) => {
    const { minCredits, maxCredits } = req.query;

    const isValidInteger = (value) => /^-?\d+$/.test(value);

    if (minCredits !== undefined && !isValidInteger(minCredits)) {
        return res.status(400).json({ error: "minCredits must be a valid integer" });
    }

    if (maxCredits !== undefined && !isValidInteger(maxCredits)) {
        return res.status(400).json({ error: "maxCredits must be a valid integer" });
    }

    if (
        minCredits !== undefined &&
        maxCredits !== undefined &&
        isValidInteger(minCredits) &&
        isValidInteger(maxCredits)
    ) {
        const min = parseInt(minCredits);
        const max = parseInt(maxCredits);
        if (min > max) {
            return res.status(400).json({
                error: "Invalid credit range: minCredits cannot be greater than maxCredits"
            });
        }
    }

    next();
};

export default validateQuery;
