import React from 'react';
import Card from './Card';

function DisplayGrid({ data }) {
    if (!data) {
        return
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full pt-4'>
            {Object.values(data).map((item, index) => {
                return <Card key={item.url || index} image={item.image} title={item.title} headline={item.headline} url={item.url} />;
            })}

        </div>
    );
}

export default DisplayGrid;