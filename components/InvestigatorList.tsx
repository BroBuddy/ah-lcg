'use client'

import React from 'react'
import InvestigatorCard from './InvestigatorCard'
import { InvestigatorData } from '@/store/investigatorData'

const InvestigatorList = () => {
    const investigatorDeck = InvestigatorData

    return (
        <div className="flex flex-row flex-wrap gap-8">
            {investigatorDeck &&
                investigatorDeck?.map(
                    (investigatorData: Investigator, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <InvestigatorCard
                                    investigatorData={investigatorData}
                                />
                            </React.Fragment>
                        )
                    }
                )}
        </div>
    )
}

export default InvestigatorList
