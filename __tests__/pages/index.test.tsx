import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import {useContractMetadata} from '@thirdweb-dev/react'

const mockActiveClaimConditionForWallet: any = jest.fn(() => {
    return {
        availableSupply: 1,
    }
})
const mockClaimConditions: any = jest.fn(() => {
    return {
        data: []
    }
})
const mockUseContractMetadata: any = jest.fn(() => {
    return {data: '0xabcdef'}
})

const mockUseTotalCirculatingSupply: any = jest.fn(() => {
    return {
        data: 0
    }
})

jest.mock('@thirdweb-dev/react', () => {
    return {
        useActiveClaimConditionForWallet: () => mockActiveClaimConditionForWallet(),
        useAddress: jest.fn(),
        useClaimConditions: () => mockClaimConditions(),
        useClaimerProofs: jest.fn(() => {
            return {
                maxClaimable: 1000,
            }
        }),
        useClaimIneligibilityReasons: jest.fn(() => {
            return {
                data: {
                    length: 0,
                },
                isSuccess: true,
            }
        }),
        useContract: jest.fn(() => {
            return {
                contract: {
                    getAddress: jest.fn()
                }
            }
        }),
        useContractMetadata: () => mockUseContractMetadata(),
        useTotalCirculatingSupply: () => mockUseTotalCirculatingSupply(),
        Web3Button: jest.fn(),
    }
})

describe('Home', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders drop is not ready to be minted when not claimable', () => {
        // @ts-ignore
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: /this drop is not ready to be minted yet/i,
        })

        expect(heading).toBeInTheDocument()
    })

    it('renders basic NFT information', () => {
        mockUseContractMetadata.mockReturnValue({
            data: {name: 'foo', description: 'bar', image: 'baz'}
        })

        // @ts-ignore
        render(<Home />)

        const title = screen.getByRole('heading', {
            name: /foo/i,
        })
        const description = screen.getByText(/bar/i)
        const image = screen.getByAltText(/preview image/i)

        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(image).toBeInTheDocument()
    })

    it('renders the number of NFs claimed', () => {
        mockClaimConditions.mockReturnValue({
            data: [
                {maxClaimableSupply: 1}
            ]
        })
        mockUseTotalCirculatingSupply.mockReturnValue({
            data: 123456
        })

        // @ts-ignore
        render(<Home />)

        const supply = screen.getByText('123456')

        expect(supply).toBeInTheDocument()
    })

    it('renders the Quantity buttons when available to mint', () => {
        mockClaimConditions.mockReturnValue({
            data: [
                {maxClaimableSupply: 1}
            ]
        })

        // @ts-ignore
        render(<Home />)

        const addQuantity = screen.getByRole('button', {
            name: "+"
        })
        const removeQuantity = screen.getByRole('button', {
            name: "-"
        })

        expect(addQuantity).toBeInTheDocument()
        expect(removeQuantity).toBeInTheDocument()
    })

    it('renders "Sold Out" when NFTs are sold out', () => {
        mockClaimConditions.mockReturnValue({
            data: [
                {maxClaimableSupply: 1}
            ]
        })
        mockActiveClaimConditionForWallet.mockReturnValue({
            availableSupply: 0
        })

        // @ts-ignore
        render(<Home />)

        const soldOut = screen.getByRole('heading', {
            name: /sold out/i,
        })

        expect(soldOut).toBeInTheDocument()
    })

    it('renders the Web3 button when NFT available to mint', async () => {
        mockClaimConditions.mockReturnValue({
            data: [
                {maxClaimableSupply: 1}
            ]
        })
        mockActiveClaimConditionForWallet.mockReturnValue({
            data: {
                availableSupply: 10_000,
                currencyMetadata: {
                    decimals: 2,
                    symbol: "TST",
                    value: 1
                }
            }
        })
        mockUseTotalCirculatingSupply.mockReturnValue({
            data: 1_000
        })

        // @ts-ignore
        render(<Home />)

        const soldOut = screen.queryByText(/sold out/i)

        expect(soldOut).not.toBeInTheDocument()
    })
})


