import React, { useEffect, useRef, useState } from 'react';

export const useFetch = ( url ) => {
  
    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
      
    
      return () => {
        isMounted.current = false;
      }
    
    }, [])
    

    useEffect( () => {

        fetch( url )
            .then( res => res.json())
            .then( res =>  {

                
                setTimeout(()=>{

                    if(isMounted.current){
                        setState({
                            loading: false,
                            data: res,
                            error: null
                        })
                    }else{

                    }

                },2000)
                

            })    
      
    }, [url]);
    
    return state;

}
