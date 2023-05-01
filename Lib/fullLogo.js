const Shape = require("./shape")

const fullLogo = (Shape) => { `
<svg xmls="http:/www.w3.org/2000/svg" width ="400" height="400"> 

    ${Shape}
    ${text}
    ${textColor}
    ${logoShape}
    ${color}
    
    </svg>
`
}


module.exports = {fullLogo};