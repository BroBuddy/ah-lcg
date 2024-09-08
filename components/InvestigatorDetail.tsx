'use client'

import { useParams } from 'next/navigation'
import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'
import CardDeck from './CardDeck'
import InvestigatorInformation from './InvestigatorInformation'
import InvestigatorCard from './InvestigatorCard'
import { FindInvestigator } from '@/store/investigatorData'

const InvestigatorDetail = () => {
    const params = useParams()
    const { slug } = params

    const investigatorData: Investigator = FindInvestigator(slug as string)

    if (!investigatorData) {
        return (
            <Card>
                <CardHeader>
                    Could not find an investigator with given id.
                </CardHeader>
            </Card>
        )
    }

    return (
        <>
            {investigatorData && (
                <>
                    <div className="flex flex-row gap-8">
                        <InvestigatorCard
                            investigatorData={investigatorData}
                            enterLink={false}
                        />

                        <InvestigatorInformation
                            health={investigatorData.health}
                            sanity={investigatorData.sanity}
                            skills={investigatorData.skills}
                        />
                    </div>

                    <div className="flex flex-1 w-[732px]">
                        <CardDeck
                            deck={investigatorData.cardDeck as DeckCard[]}
                        />
                    </div>
                </>
            )}
        </>
    )
}

export default InvestigatorDetail
