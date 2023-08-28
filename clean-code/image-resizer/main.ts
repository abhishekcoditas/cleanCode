

app.post('/upload',(req, res) => {
  const form = new formidable.IncomingForm();
  return new Promise((resolve,reject) => {
      form.parse(req,async(err,fields)=>{
        try{
              // Save the image details in a database and return an ID
              resolve("uniqueID")
        }
        catch(error){
            // catch the error if anything failed in try block
            reject(error)
        }
    })
  })
});

app.post('/resize',(req, res) => {
  let height = req.body.height;
  let width = req.body.width;
  try {
    const imageResize = this.ServiceWorker.imageResize(height,width);
    return 'Successfully resize'
  } catch (error) {
    throw new error('not able to resize');
  }
});

app.post('/crop',(req, res) => {
  let coordinate = req.body.coordinate;
  let dimension = req.body.dimension;
  try {
    const imageCrop = this.ServiceWorker.imageCrop(coordinate,dimension);
    return 'Successfully crop'
  } catch (error) {
    throw new error('not able to crop');
  }
});


app.get('/:id',(req, res) => {
  let id = req.param.id;
  try {
    const image = this.ServiceWorker.getImage(id);
    return image;
  } catch (error) {
    throw new error('not able to retrieve image');
  }
});




