import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { updateMovies } from "../../features/movieSlice";
import Movies from "../../components/Movies/Movies";

const Popular = ()=> {
    //membuat dispatch untuk mentriger
    const dispatch = useDispatch();

    useEffect(()=> {
        getPopularMovies();
    },[]);

    const getPopularMovies = async () => {
        const response =  await axios(ENDPOINTS.POPULAR);
        dispatch(updateMovies(response.data.results))
    }

    return(
        <div>
            <Hero/>
            <Movies title = "Popular"/>
        </div>
    )
}
export default Popular