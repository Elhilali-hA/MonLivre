import React from 'react'
import {Route , Redirect } from 'react-router-dom'

const SecretaryRoutes = ({ role , component: Component, ...rest }) => {
  return (
    <Route 
    {...rest}
    render={(props) =>{
        if (role === 'secretary'){
            return <Component />;

            
        }else 
            return(

                <Redirect to={{pathname: "/404", state: {from : props.location}}}/>
                );
        
    }}
    />
  )
}

export default   SecretaryRoutes