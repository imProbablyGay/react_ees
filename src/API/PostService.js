import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        try {

        } catch (e) {console.log(e);}
        
        let data = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return data
    }

    static async getCertain(id) {
        try {

        } catch (e) {console.log(e);}
        
        let data = await axios.get('https://jsonplaceholder.typicode.com/posts' + '/' + id);
        return data
    }
    
    static async getComments(id) {
        try {

        } catch (e) {console.log(e);}
        
        let data = await axios.get('https://jsonplaceholder.typicode.com/posts' + '/' + id + '/comments');
        return data
    }
}