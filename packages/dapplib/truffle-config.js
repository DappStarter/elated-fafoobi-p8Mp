require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rebel machine social hunt battle equal genre'; 
let testAccounts = [
"0x3a2d24d9f20e73e0fb37edd30299e5ddbac6af910b925f639536d5562f2d5543",
"0x7ad91abd76d4bd5a965c292151987577e9cfe1f7c1fcace2c2b52ec34e76b8f2",
"0x0cf060f72d9505329b2a9d9a17aa0ea71e5b9fd85fb0c4984b410769bf5a26eb",
"0xe6e9220e6aad5037b5f5a59dc2cf74ff76a19227f1801c4bcf516d782acaca48",
"0x9b5c3c2be3d031d4316089e9ff4f2d831d7a8b9642ce6f21877c99e350fbdede",
"0x91ce1c6f94ab0db9aa1a2a4a809c2470927ade1c8a98f38bf580d1909cb2b1c7",
"0xa17f08a9c3d7c13b6f9234368acf1fa807504a4548677818ac7706185b2d6ca8",
"0x11aab57a9f433848c9981dbcc5cfacc79f2cdc83c4b23d39a52c7972eadb97f8",
"0xc9d239a497b4a26ffaf78c9e8c58c8e00c6596bbd62c211da9bb02444db550e6",
"0x44c9b693cfd05b3949873fc3c063d0eb92d5a0816dfeafca7bdd2cb8f3710829"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


