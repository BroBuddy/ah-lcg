'use client'

import useInvestigatorStore from '@/store/investigatorStore'
import React from 'react'
import InvestigatorCard from './InvestigatorCard'

const InvestigatorList = () => {
    const { investigatorDeck } = useInvestigatorStore((state) => ({
        investigatorDeck: state.investigatorDeck,
    }))

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
