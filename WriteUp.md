## 1. Library versions
* Truffle v5.1.33 (core: 5.1.33)
* Node v10.16.1
* web3@1.2.6 

## 2. UML Diagrams
### Activity Diagram
see './uml/Activity1.png' for  the Activity Diagram.

### Sequence Diagram
see './images/Sequence.png' for the Sequence Diagram.

### State Diagram
see './images/State.png' for the State Diagram.

### Data Model Diagram
see './images/DataModel.png' for the Data Model Diagram.

Part 3:Test smart contract code coverage
### Below is the test process info:
 Contract: SupplyChain
    ✓ Testing smart contract function harvestItem() that allows a farmer to harvest coffee (160ms)
    ✓ Testing smart contract function processItem() that allows a farmer to process coffee (94ms)
    ✓ Testing smart contract function packItem() that allows a farmer to pack coffee (64ms)
    ✓ Testing smart contract function sellItem() that allows a farmer to sell coffee (65ms)
    ✓ Testing smart contract function buyItem() that allows a distributor to buy coffee (132ms)
    ✓ Testing smart contract function shipItem() that allows a distributor to ship coffee (88ms)
    ✓ Testing smart contract function receiveItem() that allows a retailer to mark coffee received (123ms)
    ✓ Testing smart contract function purchaseItem() that allows a consumer to purchase coffee (115ms)
    ✓ Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain
    ✓ Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain
    ✓ Testing smart contract inheritated function owner() that allows anyone to fetch owner of the blockchain
    ✓ Testing smart contract inheritated function transferOwnership() that allows owner of the blockchain to transfer owner to a new account (60ms)

Part 4:Deploy smart contracts on a public test network (Ropsten)
## Contract deployed on the Ethereum ROPSTEN test network (due to the Rinkeby network need Facebook or Twitter account to get the faucet ether, which I can't get in China, so I had to swith to Ropsten test network.), following is the deployment process info.:

### Transaction Hash, Contract Hash, Contract Address
Transaction Hash(contract creation): 0x11729bcb134cab6edaf3fed3174371a1f3f3d5ade6d9d890e22220cf5357d664
Contract Address:0x64799d45abecfddb983a9048465af393485efa2c

Transaction History:
Harvested - 0x1f7e65678235074ae0a0a63e782cadf8d01cf50ab4aeb8d8d1195d91022be6cf
Processed - 0x01990c01f977753c9b58e09a15903454813ee18689f633f7ef6d35569568a7b6
Packed - 0x5d7b5e17766887ce0e992bb2bba7a6512a37b82c444bf6e00060ba523e69ba50
ForSale - 0xafab73d5efabb1dcccb3017466917be41cdd72d667ee870b0ced230a4d89c88e
DistributorAdded - 0xebda0edb4632aa8a23591bc8af450ceafa6fd8c137742d25084c2ac959c9aa28
Sold - 0xf79a58813f9a746ed49f95d447414485d563415da619509008c8ec4a3670edb8
Shipped - 0x4e648713f5cfeb05256bdf49fc3aaeb5f1e9b3e48898dc7db56e4fac8df141eb
RetailerAdded - 0x46024c195a9b51f2141ff140d2e3226a403409b770233b5be80711c4cb94b6d0
Received - 0xf68d52ecc796a77cd8d5472bbec943ad93e5488b599b82be5baefeb3080f2977
ConsumerAdded - 0xeb4aa9ae928625684ec77859ac134b24fcced61bb76e844f014a93a049d01df9
Purchased - 0xc9b73a86f0ba8a4c9a80b3acf57ff0b5d03b75d597577272b4b5bcc32788ab87

### Contract Migration Detail Info as below:
Warning: Both truffle-config.js and truffle.js were found. Using truffle-config.js.

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.

Warning: Both truffle-config.js and truffle.js were found. Using truffle-config.js.


Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 0x7a121d


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x4a679e3ff600650cb4fe859fe5d99ca4a92e1a42bd88c51b1de1a98a9fbd271d
   > Blocks: 2            Seconds: 29
   > contract address:    0x1eefa05695c8806c293a64bb1497101B3E325261
   > block number:        7675736
   > block timestamp:     1586334293
   > account:             0xE2fc9338fF8E2EBe595Ca1eDb7936d3B8e8CA032
   > balance:             4.617073989
   > gas used:            225237
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00450474 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7675737)
   > confirmation number: 2 (block: 7675738)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00450474 ETH


2_deploy_contracts.js
=====================

   Replacing 'FarmerRole'
   ----------------------
   > transaction hash:    0x2262116bf9bb867549efca6f095d49b656ee694f36f08daf5d9e96ae672a1c64
   > Blocks: 3            Seconds: 15
   > contract address:    0x2B32c7fFdC3BF650c8809fBFefF84432949A0f23
   > block number:        7675748
   > block timestamp:     1586334400
   > account:             0xE2fc9338fF8E2EBe595Ca1eDb7936d3B8e8CA032
   > balance:             4.610182929
   > gas used:            302190
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0060438 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7675753)
   > confirmation number: 2 (block: 7675754)

   Replacing 'DistributorRole'
   ---------------------------
   > transaction hash:    0xb17f58c84cd0721e38fde75932acb5dc87646582d3c5a955ece4cf7b7825f9ef
   > Blocks: 2            Seconds: 16
   > contract address:    0x836Aa37834d52b0bABE0Ac89F2236f21CcC73e42
   > block number:        7675759
   > block timestamp:     1586334509
   > account:             0xE2fc9338fF8E2EBe595Ca1eDb7936d3B8e8CA032
   > balance:             4.604139129
   > gas used:            302190
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0060438 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7675761)
   > confirmation number: 2 (block: 7675762)

   Replacing 'RetailerRole'
   ------------------------
   > transaction hash:    0x85f32ea56fdffcc9e82ba403e7c97edefda8017ae271a0ac2ddeef0d863ff17e
   > Blocks: 4            Seconds: 40
   > contract address:    0xFe81a5C8efD3dF17e073b2e5010DF1a6c61512b6
   > block number:        7675766
   > block timestamp:     1586334628
   > account:             0xE2fc9338fF8E2EBe595Ca1eDb7936d3B8e8CA032
   > balance:             4.598094849
   > gas used:            302214
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00604428 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7675767)
   > confirmation number: 3 (block: 7675769)

   Replacing 'ConsumerRole'
   ------------------------
   > transaction hash:    0xfab0c750692f9a8d5ae08081d5bcc4b00dc8338f621cc5a5ddbc20319eb9ca16
   > Blocks: 1            Seconds: 26
   > contract address:    0xb45D8A5f88B37a2551c531526867441CBD1B76C9
   > block number:        7675773
   > block timestamp:     1586334704
   > account:             0xE2fc9338fF8E2EBe595Ca1eDb7936d3B8e8CA032
   > balance:             4.592051049
   > gas used:            302190
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0060438 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7675778)
   > confirmation number: 3 (block: 7675780)

   Replacing 'SupplyChain'
   -----------------------
   > transaction hash:    0x11729bcb134cab6edaf3fed3174371a1f3f3d5ade6d9d890e22220cf5357d664
   > Blocks: 2            Seconds: 25
   > contract address:    0x64799D45abEcfDDB983a9048465AF393485EfA2c
   > block number:        7675782
   > block timestamp:     1586334790
   > account:             0xE2fc9338fF8E2EBe595Ca1eDb7936d3B8e8CA032
   > balance:             4.538623809
   > gas used:            2671362
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05342724 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7675783)
   > confirmation number: 2 (block: 7675784)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.07760292 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.08210766 ETH




Part 5:Modify client code to interact with smart contracts
## Modified the app.js file to add the addFarmer, addDistributor, addRetailer, addConsumer functions, otherwise the modifiers onlyFarmer, onlyDistributor, onlyRetailer, onlyConsumer will revert the transactions.
See the code in line 169-220 in app.js file.