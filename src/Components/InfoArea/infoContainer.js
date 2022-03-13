import './infoContainer.css'

const InfoContainer = () => {
    return (
        <div className="mainInfoContainer">

            <div className="blueBGContainer">
                <div className="blueBGContentDiv">
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                        <span style={{ fontSize: "40px", color: "white", marginRight: "8px" }}> | </span>
                        <div className="blueBGTitle">Welcome to your personal area.</div>
                    </div>
                    <div className="blueBGContentText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum elit id auctor mollis. Aenean feugiat commodo quam, vulputate viverra lorem iaculis in. Curabitur varius commodo lacus eget vestibulum. Curabitur vitae risus nec justo faucibus vulputate. Nunc blandit nisi lobortis, gravida elit non, tincidunt dolor. Mauris ullamcorper suscipit risus, eget dictum dui consequat sed. Nam quis orci id dui consectetur elementum. Nulla et lacus massa.
                    </div>
                </div>
            </div>

            <div className="whiteBGContainer">
                

                    <div className="whiteBGContentContainer">
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                            <span style={{ fontSize: "30px", color: "#EF233C", marginRight: "8px" }}> | </span>
                            <div className="whiteBGTitle">Investments</div>
                        </div>
                        <div className="whiteBGContentText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum elit id auctor mollis. Aenean feugiat commodo quam, vulputate viverra lorem iaculis in. Curabitur varius commodo lacus eget vestibulum. Curabitur vitae risus nec justo faucibus vulputate.
                        </div>
                    </div>

                    <div className="whiteBGContentContainer">
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                            <span style={{ fontSize: "30px", color: "#EF233C", marginRight: "8px" }}> | </span>
                            <div className="whiteBGTitle">Stocks</div>
                        </div>
                        <div className="whiteBGContentText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum elit id auctor mollis.
                        </div>
                        <button className="exploreBtn">
                            Explore 
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default InfoContainer