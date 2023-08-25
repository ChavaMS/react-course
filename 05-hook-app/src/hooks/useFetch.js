import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLLoading: true,
        hasError: null
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLLoading: true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLLoading: false,
            hasError: null
        });
    }

    useEffect(() => {
        getFetch();
    }, [url]);


    return {
        data: state.data,
        isLLoading: state.isLLoading,
        hasError: state.hasError
    };
}


