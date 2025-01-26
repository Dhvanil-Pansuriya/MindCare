import React from "react";
import axios from 'axios';

const TestApi = () => {

    const fetch = async () => {
        const options = {
            method: 'GET',
            url: 'https://all-books-api.p.rapidapi.com/getBooks',
            headers: {
                'x-rapidapi-key': '682ff9e834mshc3b4253753c23c7p1f3645jsn2620179fee6f',
                'x-rapidapi-host': 'all-books-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log("Book Data : ",response.data);
        } catch (error) {
            console.error(error);
        }
    }

    fetch()
    return <div>TestApi</div>;
};

export default TestApi;
