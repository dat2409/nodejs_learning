const Course = require('../models/Course');
const mongooseFunction = require('../../util/mongoose');

class StaticPagesController {

    // if have error, next called
    home(req, res, next) {
        // find documents from the same collection
        Course.find({})
            .then(courses => {
                res.render('home', { courses: mongooseFunction.listMongooseToObject(courses) }) // render object courses : courses nhưng key value trùng tên nên có thể viết gọn
            })
            .catch(next)
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new StaticPagesController;