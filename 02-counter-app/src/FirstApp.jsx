import PropTypes from 'prop-types';

export function FirstApp({ title, subTitle, name }) {

    // console.log(props);

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.protoTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

FirstApp.defaultProps = {
    title: 'No hay ningun titulo'
}