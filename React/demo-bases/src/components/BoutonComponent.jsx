import mesStyles from './BoutonComponent.module.css'

const BoutonComponent = (cequeJeVeuxRecup) => {
    let textBouton = cequeJeVeuxRecup?.textBouton ?? 'titi'

    return (
        <>
            <button style={{backgroundColor: cequeJeVeuxRecup.couleurBouton}}>{textBouton}</button>
            <p className={mesStyles.paragrapheJaune}>Ce paragraphe vient de BoutonComponent.jsx</p>
        </>
    )
}

export default BoutonComponent