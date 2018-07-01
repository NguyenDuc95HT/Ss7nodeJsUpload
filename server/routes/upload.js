'use strict';
import {uploadController} from '../controllers/index';
module.exports = (app) => {
    app.route('/upload')
        .post(uploadController.upload);
    app.route('/')
        .get(uploadController.loadPage);
}