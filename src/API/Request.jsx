import axios from "axios";

export const  request = async (dataInput = "cat", page = 1) => {
    const fetch= await axios.get(`https://pixabay.com/api/?q=${dataInput}&key=35543000-cc8a37d4e982ce557296d34e8&image_type=photo&orientation=horizontal&page=${page}&per_page=15`)
    const data = fetch.data.hits;
    return data;
}