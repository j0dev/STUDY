import React, { Component } from 'react';


class Hello extends Component {

    static defaultProps = {
        name: 'no',
        color: 'pink',
        isSpecial:  true
    }

    render() {

        const { color, name, isSpecial} = this.props;
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                Hello world! {name}
            </div>
        )
            
        
    }
}

// function Hello({ color, name, isSpecial}) {
    
//     return (

//         <div style={{color: color}}>
//             {isSpecial && <b>*</b>}
//         hell world! {name}</div>
//     )
// }




// Hello.defaultProps = {
//     name: 'no',
//     color: 'pink',
//     isSpecial: false
// }

export default Hello;