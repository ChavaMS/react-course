import { useCounter, useFetch } from "../hooks/index";
import { LoadingQuote, Quote } from "../03-examples/index";

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://dummyjson.com/quotes/${counter}`);

    const { author, quote } = !!data && data;

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                isLoading
                    ?
                    <LoadingQuote></LoadingQuote>
                    :
                    <Quote author={author} quote={quote} ></Quote >

            }

            <button className="btn btn-primary" onClick={() => increment()} disabled={isLoading}>
                Next quote
            </button>
        </>
    )
}
