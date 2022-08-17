import axios, { AxiosResponse } from 'axios';

const get = (
    address: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Success?: (response: AxiosResponse<any, any>) => void,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Fail?: (error: AxiosResponse<any, any>) => void,
    Finally?: () => void
) => {
    axios.get(address)
        .then(function (response) {
            if (Success)
                Success(response)
        })
        .catch(function (error) {
            if (Fail)
                Fail(error)
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