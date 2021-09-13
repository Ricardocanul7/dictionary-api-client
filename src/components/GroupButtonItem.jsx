import React from 'react'

const GroupButtonItem = (props) => {
    return (
        <button className="btn btn-primary" {...props}>{props.value}</button>
    )
}

export default GroupButtonItem
