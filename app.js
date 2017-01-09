var express = require('express'),
    app     = express(),
    PORT    = process.env.PORT || 3000;


app.use(express.static('./dist'));

app.listen(PORT, err => {
  if (err) console.log('err starting server', err);
})
