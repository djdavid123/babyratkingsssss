import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'BabyRatKings',
  tokenName: 'BabyRatKings',
  tokenSymbol: 'BRK',
  hiddenMetadataUri: 'ipfs://QmbkpbcmNAbTAW5cgDzrN7crwv4quZwKkYH6Gp5zxVBB6M/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.03,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.04,
    maxMintAmountPerTx: 6,
  },
  publicSale: {
    price: 0.05,
    maxMintAmountPerTx: 15,
  },
  contractAddress: "0xf42c846e082750F1581da649C759a1F1440D3A27",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
