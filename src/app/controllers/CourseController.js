const Course = require('../models/Course');
const mongooseFunction = require('../../util/mongoose');

class CourseController {

    // [GET] /courses/:slug
    show(req, res, next) {
        //res.json(req.params.slug)
        Course.findOne({ slug: req.params.slug })
            .then(course => res.render('courses/show', { course: mongooseFunction.singleMongooseToObject(course) }))
            .catch(next)
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/maxresdefault.jpg`;
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect(`/me/stored/courses`));
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', { course: mongooseFunction.singleMongooseToObject(course)}));
    }

    // [PATCH] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses/'))
            .catch(next);
    }

    // [DELETE] /courses/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /courses/:id
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
