module.exports = async (req, res, next) => {
    try {
        if (req.data.user.role != 'teacher') {
            res.json(403, { success: false, message: 'Não Autorizado' });
        }

        next();
    } catch (err) {
        res.json(500, { success: false, message: e.message });
    }
};