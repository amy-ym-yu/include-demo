// http://placekitten.com/?ref=apilist.fun -> image of kitten
// https://pokeapi.co/ -> pokemon
// https://www.punapi.rest/?utm_source=apislist.com -> random pun (broken) or meme
// https://www.boredapi.com/


// GET https://punapi.rest/api/meme

export async function fetchPun() {
    try {
        const response = 'https://punapi.rest/api/meme';
        console.log(response)
        return response;
    } catch (error) {
        console.error(error)
    }
}