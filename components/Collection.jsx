import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'


const Collection = ({collection: {image, name}}) => {


    return ( 
    <div>
   
      <div className="collection-card">
        <img src={urlFor(image && image[0])} width={130} height={130} className=""
         />
         <p>{name}</p>
      </div>
    
    </div>
    )
}

export default Collection