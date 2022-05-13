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
  hiddenMetadataUri: 'ipfs://QmYibas6qgqL4LxmZ3H696ddLJeSSLSGDrzmUSfwh29t47/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.025,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.035,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.05,
    maxMintAmountPerTx: 8,
  },
  contractAddress: "0x3aADade9954a93edf32C9afE5A0817c6ee0DFEcF",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;