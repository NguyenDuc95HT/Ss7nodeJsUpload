'use strict';
import path from 'path';
const formidable = require('formidable');
export default class UploadController {
    upload = (req, res) => {
        const form = new formidable.IncomingForm();

        form.parse(req, function (error,fields,file) {
            if (error) {
                console.log('error');
            }
        });
        form.on('fileBegin', function (name, file){
            try {
                if (file.name ==='') {
                    return res.sendFile(path.resolve() + '/server/index.html');
                }
                file.path = path.resolve() + '/server/upload/' + file.name;
            } catch (e) {
                console.log(e);
            }

        });
        form.on('file', function (name, file){
            console.log('Uploaded ' + file.name);
        });
        res.sendFile(path.resolve() + '/server/index.html');
    }
    loadPage = (req, res) => {
        res.sendFile(path.resolve() + '/server/index.html');
    }
}

