import React, {useEffect, useState , useRef ,useCallback} from 'react';
import Food from './Food';
import { ApiGetFoods ,ApiGetAllCategories,  ApiGetFoodsCategory } from '../services/foods'; 
import FoodSkeleton from './Food-Skeleton';

const Foods = () => {

   
   const max_limit_foodes = 45;

    const [foods, setFoods] = useState([]);

const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)
const [hasMore, setHasMore] = useState(false)


const [pageNumber, setPageNumber] = useState(1)

const [categoryParam, setcategoryParam] = useState('')


const [pageLimit, setPageLimit] = useState(15);




const observer = useRef()
const lastFoodElementRef = useCallback(node => {
  if (loading) return
  if (observer.current) observer.current.disconnect()
  observer.current = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && hasMore) {
      setPageNumber(prevPageNumber => prevPageNumber + 1)
    }
  })
  if (node) observer.current.observe(node)
}, [loading, hasMore])

   


      useEffect(() => {
        const timer =  setTimeout(() => {
   ApiGetFoods(setFoods ,setLoading, setError ,pageNumber,categoryParam , setHasMore, pageLimit ); 
    }, 3000);  
  
        return () => clearTimeout(timer)
      }, [pageNumber, categoryParam, pageLimit ])


  

     const handleCategoryFoodTrack = (e) =>{
              e.preventDefault();
              setcategoryParam(e.target.dataset.id);
     }
     const handleCategoryVegetarian = (e) =>{
                e.preventDefault();
                setcategoryParam(e.target.dataset.id);
    }
    const handleCategoryBurgers = (e) =>{
              e.preventDefault();
              setcategoryParam(e.target.dataset.id);
    }
    const handleCategoryFoodMexican = (e) =>{
      e.preventDefault();
      setcategoryParam(e.target.dataset.id);
}

    const mapingFoods = foods.map((value,i) =>{
    
        return  foods.length === i + 1 && foods.length <= max_limit_foodes ?  
        <Food key={value.id+'-'+i} lastElementRef={lastFoodElementRef} loading={loading}  allFoods={value}   />
        : <Food key={value.id+'-'+i} allFoods={value} loading={loading} /> 
         })

   

    return ( 
  
         <section className="section-foods container">
             <div className={loading ? 'categories skeleton' : 'categories'} >

                         <div className="col-3 col-2-mob">
                                  <a className="btn btn-category hide-text"    onClick={handleCategoryFoodTrack}   data-id="foodtrucks"  href="#">Food trucks</a>
                         </div>
                         <div className="col-3 col-2-mob">
                                  <a className="btn btn-category hide-text"  onClick={handleCategoryVegetarian}  data-id="vegetarian"  href="#">Vegeterian</a>
                         </div>
                         <div className="col-3 col-2-mob">
                                <a className="btn btn-category hide-text"  onClick={handleCategoryBurgers}  data-id="burgers" href="#">Burgers</a>
                         </div>
                          
                   
             </div>
           
             <div className="grid grid-cols" >

                   { foods.length > 0 && mapingFoods}
                   {
                     loading && <FoodSkeleton/>
                     
                 }
                 {
                     !loading && hasMore && foods.length <= max_limit_foodes && <div className="loader">
                     <span></span>
                     <span ></span>
                     <span ></span>
                   </div>
                 }
                  
             </div>
             
         </section>


    );
}

export default Foods;











