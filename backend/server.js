const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;


let bhagwadGita;

axios.get("https://bhagavadgitaapi.in/chapters")
.then((response)=>{
    bhagwadGita = response.data;
})


app.get("/bhagwadgita/", (req,res)=>{
    res.send(bhagwadGita)
})






app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
