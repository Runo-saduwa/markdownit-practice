const express = require('express');
const app = express();
const path = require('path');
//var md = require('markdown-it')();

var hljs = require('highlight.js') // https://highlightjs.org/

// Actual default values
// var md = require('markdown-it')({
//   highlight: function (str, lang) {
//     if (lang && hljs.getLanguage(lang)) {
//       try {
//         const result =  '<pre class="hljs"><code>' +
//                hljs.highlight(lang, str, true).value +
//                '</code></pre>';
//                res.send(result)
//       } catch (__) {}
//     }

//      const result= '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
//      return result.send(result);
//   }
// });

const publicDirectoryPath = path.join(__dirname, './public');
console.log(__dirname)
console.log(path.join(__dirname, './views/index.html'))
const viewsPath = path.join(__dirname, './views');


//set up views
app.set('views', viewsPath);
//set up to serve static assets from public folder
app.use(express.static(publicDirectoryPath));


app.get('/', (req, res) => {
   // var result = md.render('# markdown-it rulezz!');


//    var result = md.renderInline('__markdown-it__ rulezz!');
    // res.send({
    //     md
    // })

    // res.sendFile(path.join(__dirname, '../../views/index.html'));

    var md = require('markdown-it')({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              const result =  '<pre class="hljs"><code>' +
                     hljs.highlight(lang, str, true).value +
                     '</code></pre>';
                     res.send(result)
            } catch (__) {}
          }
      
           const result= '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
           return res.send(result);
        }
      });
    
});
// app.get('/', (req, res) => {
//      res.sendFile(path.join(__dirname, './views/index.html'));
// });


app.listen(2020, ()=> {
    console.log('server is up and running in port 2020')
})