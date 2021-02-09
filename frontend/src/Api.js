import axios from 'axios';
export const fetchData = async () => {
    const { data } = await axios.get('http://localhost:4000/details');
    // const modifiedData = data['genres'].map((m) => ({
    //     id: m['id'],
    //     name: m['name']
    // }))
    // return modifiedData;
    return data;

}