const Shape = require("./shape")

const fullLogo = (Shape) => { `
<svg xmls="http:/www.w3.org/2000/svg" width ="400" height="400" version="1.1">

<shape> 

<text x="150" y="125" font-size="60" text-anchor="middle" fill="_COLOR_">__TEXT__</text>

    ${Shape}
    ${text}
    ${textColor}
    ${logoShape}
    ${color}
    
    </svg>
`
}


module.exports = {fullLogo};