const DemoListingComponent = () => {
    const mesPrenoms = ["John", "Albert", "Chloée", "Tao", "Ihab", "Julie"]
    console.log(mesPrenoms);
    // [1, 2, 3, 4, 5].map(nbr => nbr * nbr) 
    // [1, 4, 9, 16, 25]
    
    const monPrenom = "Blabla"


    return (
        <>
            <h1>DemoListingComponent</h1>
            <hr />
            <ul>
                {mesPrenoms.map((prenom, i) => <li key={i}>{prenom}</li>)}
            </ul>
        </>
    )
}

export default DemoListingComponent