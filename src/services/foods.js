import axios from 'axios';

const ApiGetFoods =  async  (setFoods , setLoading, setError ,pageNum , cat, setHasMore ,limit)  => {

  setLoading(true)
    setError(false)

  // const url = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=San Jose, CA 95127&term=restaurants';
 //  const url = '/search?location=San Jose, CA 95127&term=restaurants';
  // const url = `${process.env.REACT_APP_API_DOMAIN}/businesses/search`;
//  const url = 'https://api.yelp.com/v3/businesses/search?location=San Jose, CA 95127&term=restaurants';
//  const url = `${process.env.REACT_APP_CLIENT_DOMAIN}/data/foods.json`;
    const url = process.env.REACT_APP_API_YELP_URL;



    const confif = {
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*'
      }  
    }

    const perPage = pageNum * limit;

  console.log(limit)
  console.log(perPage)
   await axios.get(`${url}yelp/business/restaurants/limit/${perPage}/category/${cat}`, {confif}
        ).then(response => {
          const businesses = response.data.businesses;
          setFoods(prevFoods => {
            return [...new Set([...prevFoods, ...businesses])]
          })
 console.log(businesses)
        // setFoods(businesses);
       /* if(cat !== null)
          setFoods(prevFoods => {
            return [...new Set([...prevFoods, ...businesses])]
          });
             else
          setFoods((prevFoods) => {
            return [...new Set([ ...businesses , ...prevFoods,])]
          });*/

          setLoading(false)
  
	
     setHasMore(businesses.length === perPage)
     
        console.log(response)
    
    }).catch(error => {
      if (axios.isCancel(error)) return
      setError(true)
    });


      
}





const ApiGetAllCategories = ()  => {



  // const url = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=San Jose, CA 95127&term=restaurants';
 //  const url = '/search?location=San Jose, CA 95127&term=restaurants';
  // const url = `${process.env.REACT_APP_API_DOMAIN}/businesses/search`;
//  const url = 'https://api.yelp.com/v3/businesses/search?location=San Jose, CA 95127&term=restaurants';
//  const url = `${process.env.REACT_APP_CLIENT_DOMAIN}/data/foods.json`;
    const url = process.env.REACT_APP_CLIENT_URL;

    const confif = {
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*'
      }  
    }

    axios.get(`${url}/data/categories.json`, {confif}
        ).then(response => {

        console.log(response)
    //    setFoods(businesses)
    }).catch(error => {
      if (axios.isCancel(error)) return
    });


         
    
  

}


    export {
      ApiGetFoods,
      ApiGetAllCategories 
    } 