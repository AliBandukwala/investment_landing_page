import logoBig from '../../Assets/logoBig.svg'

const footerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#222222 0% 0% no-repeat padding-box",
    height: "165px",
}

const Footer = () => {
    return(
        <div style={footerStyles}>
            <img alt="" src={logoBig} />
        </div>
    )
}

export default Footer