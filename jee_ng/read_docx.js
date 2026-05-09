const mammoth = require("mammoth");

mammoth.extractRawText({path: "Smart Academy Management.docx"})
    .then(function(result){
        var text = result.value; 
        console.log(text);
    })
    .catch(function(error) {
        console.error(error);
    });
