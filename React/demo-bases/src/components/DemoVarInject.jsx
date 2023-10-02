const monPrenom = "Antoine"
const maClasse = "text-danger"
const sonAge = 61

const DemoVarInject = () => {
    const maFonction = (param) => {
        return param + ' tada'
    }

    if (sonAge >= 18) {
        return (
            <>
            {sonAge >= 18 && <>
                <p>
                    Je suis {maFonction("vrai")}
                </p>
                <p>
                    Autre parent
                </p>
                </>}
                {sonAge >= 18 ? <>
                <p>
                    Je suis vrai
                </p>
                <p>
                    Autre parent
                </p>
                </> : 
                null}
                <p className={maClasse + 'tada'}>
                    Mon prénom est <b>{monPrenom}</b>
                </p>
                <p className={sonAge >= 18 ? 'text-success' : 'text-danger'}>Il est <b>{sonAge >= 18 ? 'majeur' : 'mineur'}</b></p>
            </>
        )
    } else {
        return (
            <>
                <p>
                    Je suis vrai
                </p>
                <p>
                    Autre parent
                </p>
                <p>
                    Je suis vrai
                </p>
                <p>
                    Autre parent
                </p>
                <p className={maClasse + 'tada'}>
                    Mon prénom est <b>{monPrenom}</b>
                </p>
                <p className='text-success'>Il est <b>majeur</b></p>
            </>
        )
    }
    
    
    
}

export default DemoVarInject