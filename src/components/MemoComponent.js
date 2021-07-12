import React from 'react';

function MemoComponent({name}) {
    console.log('functional redering..')
    return (
        <div>
            {name}
        </div>
    );
}

export default React.memo(MemoComponent)