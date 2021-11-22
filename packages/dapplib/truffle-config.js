require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth sad social install squirrel fresh stone'; 
let testAccounts = [
"0xc2fad3df1a18e8775c506c4448b2eccefc469e31e123626f1e9d89bc8170cf37",
"0xe9989ad802ec5e189df9638b57be0883f1ad0c0d8998d35848d7297db7dcbefa",
"0x1263a361ed992e8bb73ef15b33a57377caef0fde9ef966061c9daeb7c70abe8d",
"0x1a2b251f52cfcba60bf0d91a9945c7bb1409210373350b7b2f61f7fed807be28",
"0x74c4da86203cb84e4f2b8183765060f29d1e6da570fa4967aa01c3ff194128aa",
"0x0464eb39aa6680b8002d6ad5891683b3e0ab439b64e2332c37210399a2a7becd",
"0x9575c69e401a02f954613801cbc505b2bbe13ae57d0212cfc8a445e533f5c449",
"0x38fa3893932a0b79c4409b5b538eb8be6b447d97282b14fff1157e0b7098131c",
"0x902abc8b7956c8d02cb4a9318690512d703c2bdba144ed291c94225cb3b8b115",
"0xf429a3de7ce16bc3d4ab5e90210e8c21f1a55d95bf146e64266d4a10f1a57234"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

