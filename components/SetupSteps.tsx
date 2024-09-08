import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { CardDecks, WeaknessDeck } from '@/store/cardData'
import { InvestigatorData } from '@/store/investigatorData'
import useInvestigatorStore from '@/store/investigatorStore'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

const SetupSteps = () => {
    const { investigator, setInvestigator, addCardsIntoDeck } =
        useInvestigatorStore((state) => ({
            investigator: state.investigator,
            setInvestigator: state.setInvestigator,
            addCardsIntoDeck: state.addCardsIntoDeck,
        }))

    const { toast } = useToast()

    const selectInvestigator = (investigatorItem: Investigator) => {
        setInvestigator(investigatorItem)

        toast({
            title: `${investigatorItem.name} was added`,
        })
    }

    const selectDeck = (deckItem: any) => {
        addCardsIntoDeck(deckItem.deck)

        toast({
            title: `${deckItem.name} was added`,
        })
    }

    const getRandomWeakness = () => {
        const randomNumber = Math.floor(Math.random() * weaknessDeck.length) + 1
        const weaknessCard = [weaknessDeck[randomNumber]]

        addCardsIntoDeck(weaknessCard as DeckCard[])

        toast({
            title: `Random weakness was added`,
        })
    }

    const cardDecks = CardDecks
    const investigatorData = InvestigatorData
    const weaknessDeck = WeaknessDeck

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Step 1: Investigator</CardTitle>
                    <CardDescription>
                        Select one of the following investigators to start your
                        deck.
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-row flex-wrap gap-4">
                    {investigatorData.map(
                        (investigatorItem: Investigator, index: number) => {
                            return (
                                <Button
                                    key={index}
                                    variant="outline"
                                    onClick={() =>
                                        selectInvestigator(investigatorItem)
                                    }
                                >
                                    {investigatorItem.name}
                                </Button>
                            )
                        }
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Step 2: Deck</CardTitle>
                    <CardDescription>
                        Select a deck for your investigator.
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-row flex-wrap gap-4">
                    {cardDecks.map((deckItem, index: number) => {
                        return (
                            <Button
                                disabled={!investigator ? true : false}
                                key={index}
                                variant="outline"
                                onClick={() => selectDeck(deckItem)}
                            >
                                {deckItem.name}
                            </Button>
                        )
                    })}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Step 3: Weakness</CardTitle>
                    <CardDescription>
                        Add one random weakness card into your deck.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Button
                        disabled={!investigator ? true : false}
                        variant="outline"
                        onClick={getRandomWeakness}
                    >
                        Get random weakness
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}

export default SetupSteps
