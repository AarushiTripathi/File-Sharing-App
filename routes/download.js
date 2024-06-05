const router = require('express').Router();
const File = require('../models/file');


// when someone has link, the moment they click this link it will search from database and download the file
router.get('/:uuid', async (req, res) =>{
    const file = await File.findOne({uuid: req.params.uuid});
    if(!file){
      return res.render('download', {error: 'link has been expired.'});

    }

    const filePath = `${__dirname}/../${file.path}`
    res.download(filePath);


} );

module.exports = router;
