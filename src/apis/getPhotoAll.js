import axios from "axios";

const API_URL = "https://api.snowmanvillage.site";

const getPhotoAll = async(ordersBy) => {
    try{
        const res = await axios.get((`${API_URL}/photo/list`,{ headers: {
            "Content-Type": "application/json",
          },
          params : {ordersBy} }))
          console.log(res)
    }
    catch(err){
        console.error(err)
    }
   
}

export default getPhotoAll;