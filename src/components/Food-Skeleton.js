

const FoodSkeleton = () => {


    return ( 
  
        [...Array(6)].map((value,i) =>{     
  return <div key={i} className="food skeleton" >
        
        <div  className="food__image" > </div>
       <div className="food__content">  
              <p className="food__name hide-text"> </p>
             
       </div>
       
        <div className="food__rep">  
          <p className="food__rep-ratings hide-text">
            
            
          </p>
          <p className="food__rep-price hide-text">
                  
          </p>
        
     </div>
     <a className="food__view btn btn-food hide-text" href="#">View</a>

</div>
         })             

    );
}

export default FoodSkeleton;

