const fetch = require('node-fetch')

let url = 'https://api.publicapis.org/entries'

fetch(url).then((data) => data.json()).then((newData) => {

  console.log(newData.entries.map(({API, Description, Link, Category}) => {

    console.log(

      `API: ${API},
Description: ${Description},
Link: ${Link},
Category: ${Category}
-------------`)


  })


)

})
