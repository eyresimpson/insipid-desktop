/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';

const get = (
    address: string,
    Success?: (response: AxiosResponse<any, any>) => void,
    Fail?: (error: AxiosResponse<any, any>) => void,
    Finally?: () => void
): any => {
    axios.get(address)
        .then(function (response) {
            if (Success)
                Success(response)
            else return response
        })
        .catch(function (error) {
            if (Fail)
                Fail(error)
            else return error
        })
        .then(function () {
            if (Finally)
                Finally()
        });
}
const post = () => {
    console.log();

}

export {
    get, post
}