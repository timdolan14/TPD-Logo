const Shape = require("./shape")

const fullLogo = (Shape) => { `
<svg width ="400" height="400"> 

    ${Shape}
    
    </svg>
`
}


module.exports = {fullLogo};