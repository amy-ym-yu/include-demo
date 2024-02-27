import React, { useEffect } from 'react';
import { useState } from 'react';

export const DataItem = (props) => {
    console.log(props)
    const [menu, setMenu] = useState(props.menu);

    useEffect(() => {
        console.log(menu, props.menu)
        setMenu(props.menu)
    }, [props, menu]);

    return (
        <div>
            {menu.map( (item, key) => {
                return (<>
                    <h1>{item.name}</h1>
                    <p>{item.price}</p>
                </>)
            })}
        </div>
    )
}