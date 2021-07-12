import React, { PureComponent } from 'react';

class Purecom extends PureComponent {
    render() {
        console.log('PureComp')
        return (
            <div>
                PureComponent1 {this.props.name}
            </div>
        );
    }
}

export default Purecom;