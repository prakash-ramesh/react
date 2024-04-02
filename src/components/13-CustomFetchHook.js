import { useCallback, useState } from "react";
import { useEffect } from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/13.txt";

const useFetch = (url, method, body) => {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const [data, setData] = useState();

    const sendRequest = useCallback(async (url, method, body) => {
        setIsLoading(true);

        let response = null;
        let data = {};

        try {
            response = await fetch(url, {
                method: method,
                body: body ? JSON.stringify(body) : null,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error("Send Request Failed.")
            }

            data = await response.json();
        } catch (error) {
            setError({message: error.message});
        }
        finally {
            setIsLoading(false);
        }
        
        return new Promise((resolve, reject) => {
            if (!response.ok) {
                reject("Send Request Failed.")
            } else {
                resolve(data);
            }
        });
    }, []);

    useEffect(() => {
        async function invoke() {             
            setData(await sendRequest(url, method, body));            
        }

        invoke();
    }, [url, method, body, sendRequest]);

    return {
        isLoading,
        error,
        data,
        setData,
        sendRequest
    }
}

export default useFetch;

export const CustomHookComponent = () => {
    return <Wrapper title="Custom Hook" fileName={txt}>
        <h6>C13: Custom Hook</h6>
    </Wrapper>
}