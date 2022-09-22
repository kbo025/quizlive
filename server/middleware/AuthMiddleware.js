
const {
    Room
} = require('../models');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token) {
            res.json(401, { success: false, message: 'NO_TOKEN' });
        }

        const teacher = req.data.room.get('teacher').endNode();
        let user = null;
        if (teacher.get('teacher_id') == token) {
            user = {
                token,
                code: teacher.get('code'),
                role: 'teacher',
                name: teacher.get('name')
            };
        } else {
            const code = req.data.room.get('code');
            const students = await Room.getStudents(code);
            const student = students.records.map( e => e._fields[0].properties).find( e => e.student_id == token);
            if (student) {
                user = {
                    token,
                    code: student.code,
                    role: 'student',
                    name: student.name
                };
            }
        }

        if (!user) {
            res.json(401, { success: false, message: 'NO_USER_FOUND' });
        }

        req.data = { ...req.data, user };
        next();
    } catch (err) {
        res.json(500, { success: false, message: err.message });
    }
};