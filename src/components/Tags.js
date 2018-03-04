import React from 'react';

import Tag from './Tag';


export default ({tags}) => {
    return (
        
        <span>
            {tags.map(tag => <Tag name={tag} />)}
        </span>

        );

}