'use client'

import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'
import InvestigatorInformation from './InvestigatorInformation'
import InvestigatorCard from './InvestigatorCard'
import { FindInvestigator } from '@/store/investigatorData'

const InvestigatorDetail = (investigator: { investigator?: Investigator }) => {
    const investigatorData: Investigator = FindInvestigator(
        String(investigator.investigator?.url)
    )

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
                </>
            )}
        </>
    )
}

export default InvestigatorDetail
