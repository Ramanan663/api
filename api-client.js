const API_KEY = "6b441599f8f0e735b17c8181779705f6";
const base_eindpoint = "https://api.themoviedb.org/3";

const apiUrl = async() => {
    //https://api.themoviedb.org/3/movie/550?api_key=6b441599f8f0e735b17c8181779705f6
    const apiEindpoint = `${base_eindpoint}/movie/550?api_key=${API_KEY} `;
    try {
        const res = await fetch(apiEindpoint, { method: "get" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};