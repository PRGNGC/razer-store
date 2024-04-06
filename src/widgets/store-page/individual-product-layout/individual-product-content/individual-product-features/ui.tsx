import styles from './styles.module.scss'

interface IndividualProductFeaturesType {
    featuresList: {
        features: string[],
        values: string[]
    }
}

export function IndividualProductFeatures({featuresList}: IndividualProductFeaturesType){
    return(
        <>
            {
                featuresList.features.map((feature: string) => {
                    return(<p key={crypto.randomUUID()}>{feature}</p>)
                })
            }
            {
                featuresList.values.map((value: string) => {
                    return(<p key={crypto.randomUUID()}>{value}</p>)
                })
            }
        </>
    )
}