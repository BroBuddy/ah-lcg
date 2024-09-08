'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { WeaknessDeck } from '@/store/cardData'
import Image from 'next/image'
import React from 'react'

const WeaknessList = () => {
    const weaknessDeck = WeaknessDeck

    return (
        <Card>
            <CardHeader>
                <CardTitle>Basic Weaknesses</CardTitle>
                <CardDescription>
                    Total cards: {weaknessDeck?.length}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-row flex-wrap flex-1 gap-4">
                {weaknessDeck.map((card, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Image
                                src={`/player/${card.url}/${card.image}`}
                                height={264}
                                width={191}
                                className="image-card"
                                alt="Player Card"
                            />
                        </React.Fragment>
                    )
                })}
            </CardContent>
        </Card>
    )
}

export default WeaknessList
