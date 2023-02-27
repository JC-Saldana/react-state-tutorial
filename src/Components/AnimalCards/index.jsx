const PatoCards = ({ animal, count }) => {

    // Animales que acepta: "patos", "leones"

    const cardsStyle = {
        width: "500px",
        display: "flex",
        flexWrap: "wrap",
        margin: "20px"
    }

    const cardStyle = {
        border: "1px solid #0909091f",
        borderRadius: "8px",
        background: "#e0e0e0",
        boxShadow: "20px 20px 24px #bebebe, -20px -20px 24px #ffffff",
        padding: "8px",
        margin: "12px 18px",
        height: "100px",
        cursor: "pointer"
    }

    const imgStyle = {
        width: "100px",
        margin: "12px 0px"
    }

    const getSrc = () => {
        switch (animal) {
            case "patos":
                return "https://organicfeeds.com/wp-content/uploads/2021/03/How-To-Raise-A-Baby-Duck-scaled-1.jpg.webp"
            case "leones":
                return "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/2CTYBEDLK5DK7JY3NLHQBA2GJM.jpg"
        }
    }

    return (
        <div style={cardsStyle}>
            {[...Array(count)].map((ele, i) => (
                <div key={i} style={cardStyle} >
                    <div>{animal} número {i}</div>
                    <img style={imgStyle} src={getSrc()} />
                </div>
            ))}
        </div>
    )
}

export default PatoCards