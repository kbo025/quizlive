
module.exports = async (req, res, next) => {
    try {
        let token = req.headers['authorization'];
        if (token == undefined) {
            res.json(401, { success: false, message: 'Não Autorizado' });
        }
        
        const teacher = req.get('teacher').first();
        if (teacher.id() != token) {
            res.json(401, { success: false, message: 'Não Autorizado' });
        }

        next();
    } catch (err) {
        res.json(500, { success: false, message: e.message });
    }
};