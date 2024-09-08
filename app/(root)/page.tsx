'use client'

import FlipCard from '@/components/FlipCard'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import useInvestigatorStore from '@/store/investigatorStore'
import useScenarioStore from '@/store/scenarioStore'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Home = () => {
    const { investigator } = useInvestigatorStore((state) => ({
        investigator: state.investigator,
    }))

    const { scenario } = useScenarioStore((state) => ({
        scenario: state.scenario,
    }))

    return (
        <section className="home">
            <div className="home-content">
                <Card>
                    <CardHeader>
                        <CardTitle>Arkham Horror LCG</CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-4">
                        <p>
                            Arkham Horror: The Card Game is a cooperative Living
                            Card Game® (LCG®) in which one to four
                            investigators work together to unravel arcane
                            mysteries and conspiracies, while simultaneously
                            overcoming the personal demons that haunt their
                            past.
                        </p>
                        <p>
                            Each player takes on the role of a single
                            investigator and builds a deck around that
                            investigator’s abilities. A series of interrelated
                            scenarios creates a narrative campaign through which
                            a broader mystery is unraveled. In each of these
                            scenarios, the investigators move through and
                            explore a number of menacing locations, look for
                            clues that enable them to advance the story, and
                            attempt to evade or defeat the treacherous forces of
                            the Mythos.
                        </p>
                        <p>
                            As progress is made in the campaign, each
                            investigator gains experience and insight, which
                            allows the character to develop in a variety of ways
                            by adding powerful new high-level cards to his or
                            her deck. But beware: as one’s exposure to the
                            arcane world increases, so too does the risk of
                            insanity. The investigators must protect themselves
                            against this tightening grip of madness, all the
                            while attempting to survive and solve the mystery.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Investigator</CardTitle>
                        {investigator && (
                            <CardDescription>
                                {investigator.name}
                            </CardDescription>
                        )}
                    </CardHeader>

                    <CardContent>
                        {!investigator && <p>No investigator activated yet.</p>}

                        {investigator && (
                            <div className="flex flex-row cursor-pointer">
                                {investigator.cards.map((card, index) => {
                                    return (
                                        <FlipCard
                                            key={index}
                                            url={'investigators'}
                                            name={investigator.name}
                                            card={card}
                                        />
                                    )
                                })}
                            </div>
                        )}
                    </CardContent>

                    {investigator && (
                        <CardFooter className="gap-2">
                            <Button asChild variant="outline">
                                <Link
                                    href={`/investigator/${investigator.url}`}
                                >
                                    Enter
                                </Link>
                            </Button>
                        </CardFooter>
                    )}
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Scenario</CardTitle>
                        {scenario && (
                            <CardDescription>{scenario.name}</CardDescription>
                        )}
                    </CardHeader>

                    <CardContent>
                        {!scenario && <p>No scenario activated yet.</p>}

                        {scenario && (
                            <div className="flex flex-row gap-4">
                                {scenario.setup.map((card) => {
                                    return (
                                        <Image
                                            key={card}
                                            src={`/scenarios/${scenario.url}/${card}`}
                                            height={264}
                                            width={191}
                                            alt={scenario.name}
                                            className="image-card"
                                        />
                                    )
                                })}
                            </div>
                        )}
                    </CardContent>

                    {scenario && (
                        <CardFooter className="gap-2">
                            <Button asChild variant="outline">
                                <Link href={`/scenario/${scenario.url}`}>
                                    Enter
                                </Link>
                            </Button>
                        </CardFooter>
                    )}
                </Card>
            </div>
        </section>
    )
}

export default Home
