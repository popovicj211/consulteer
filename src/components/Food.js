


import React, {useState  } from 'react';

const Food = props => {

const allFoods = props.allFoods;
const starsChecked = Math.round(allFoods.rating);


    return ( 
 
   

<div className="food" ref={props.lastElementRef}>
        
        <img  className="food__image" src={allFoods.image_url} alt={allFoods.name} />
       <div className="food__content">  
              <p className="food__name hide-text"> {allFoods.name}</p>
             
       </div>
       
        <div className="food__rep">  
          <p className="food__rep-ratings hide-text">
            {
              [...Array(5)].map((star,i)=>{
                       i += 1;

                     return <span key={i} className={i <= starsChecked ? "fa fa-star checked" : "fa fa-star"}></span> 
              })
            }
       
            
          </p>
          <p className="food__rep-price hide-text" style={{borderLeft: allFoods.price ? '2px solid #000' : 'none' }}>
                   {allFoods.price}
          </p>
        
     </div>
     <a className="food__view btn btn-food hide-text" href={allFoods.url}>View</a>

</div>

    );
}

export default Food;