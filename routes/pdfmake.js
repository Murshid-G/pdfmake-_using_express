const express = require('express')
const router = express.Router();
const pdfMake =require('../pdfmake/build/pdfmake')
const vfsFonts = require('../pdfmake/build/vfs_fonts');

pdfMake.vfs=vfsFonts.pdfMake.vfs;

router.post('/pdf',(req,res)=>{
 var fname=req.body.fname;
 var lname=req.body.lname;
 var dd = {
	content: [
		'First paragraph',
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
	]
	
}
const pdfDoc = pdfMake.createPdf(dd);
pdfDoc.getBase64((data)=>{
    res.writeHead(200,{
        'Content-Type': 'application/pdf',
        'Content-Disposition':'attachment;filename="filename.pdf'
    })
    const download = Buffer.from(data.toString('utf-8'),'base64');
    res.end(download)
})
})

module.exports = router