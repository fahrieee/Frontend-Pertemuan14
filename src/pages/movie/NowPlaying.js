import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/movieSlice";


function NowPlayingMovie() {

    const dispatch = useDispatch();
    /**
     * Melakukan use effact for fecth data
    */
    useEffect(()=>{
        getNowPlayingMovies();
    },[])

    const getNowPlayingMovies = async()=> {
        const response = await axios(ENDPOINTS.NOW);
        dispatch(updateMovies(response.data.results))
    }

    return(
        <div>
            <Hero/>
            <Movies title = "Now Playing" />
        </div>
    )
}

export default NowPlayingMovie;