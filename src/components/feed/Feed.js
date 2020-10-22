import React, { useEffect, useState } from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
const Example =  () =>  {
		const [loaded, isLoaded] = useState(false)

		useEffect(()=>{
			isLoaded(true)
		})

    return (
    	<FacebookProvider appId="2680676682144272">
    	{
    		loaded
    		?
		        <Page 
		        	href="https://www.facebook.com/UVEAoptik" 
		        	tabs="timeline"
		        	height="450px"
		        	 />
    		: null
    	}
			</FacebookProvider>  
        
    )
}

export default Example