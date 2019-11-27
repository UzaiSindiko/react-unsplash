import React from 'react'
import { connect } from 'react-redux'

function Try (props) {

    return (
        <div className="text-center">
            <h1>INI TRY</h1>
            <span>{ `${props.state}` }</span>
        </div>
    )
    
}

function mapStateToProps( state ){
    return {state}
}

const mapDispatchToProps = { 
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Try)
