
module.exports = async (req, res, next) => {
    try {
        let token = req.headers['authorization'];
        if (token == undefined) {
            res.json(401, { success: false, message: 'Não Autorizado' });
        }

        const teacher = req.data.room.get('teacher').endNode();
        if (teacher.get('teacher_id') != token) {
            res.json(401, { success: false, message: 'Não Autorizado dif' });
        }

        next();
    } catch (err) {
        res.json(500, { success: false, message: err.message });
    }
};