'use client'

import CardDeck from '@/components/CardDeck'
import InvestigatorDetail from '@/components/InvestigatorDetail'
import { FindInvestigator } from '@/store/investigatorData'
import { useParams } from 'next/navigation'

const InvestigatorSlug = () => {
    const params = useParams()
    const { slug } = params

    const investigatorData: Investigator = FindInvestigator(String(slug))

    return (
        <section className="home">
            <div className="home-content">
                <InvestigatorDetail investigator={investigatorData} />

                <div className="flex flex-1 w-[732px]">
                    <CardDeck deck={investigatorData.cardDeck as FlipCard[]} />
                </div>
            </div>
        </section>
    )
}

export default InvestigatorSlug
