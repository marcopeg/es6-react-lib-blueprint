
import React from 'react';

export class Foo extends React.Component {

    displayName = 'Foo';

    static propTypes = {
        value: React.PropTypes.string,
    };

    static defaultProps = {
        value: 'FooDefaultValue',
    };

    render() {
        var {value} = this.props;
        return (
            <div>
                {value}
            </div>
        );
    }
}
