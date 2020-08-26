## 1. Library versions
* Truffle v5.1.33 (core: 5.1.33)
* Node v10.16.1
* web3@1.2.6 

## 2. UML Diagrams
### Activity Diagram
see './uml/ActivityDiagram1.png' for the Activity Diagram.
### Sequence Diagram
see './uml/SequenceDiagram1.png' for the Sequence Diagram.
### State Diagram
see './uml/StateDiagram1.png' for the State Diagram.
### Data Model Diagram
see './uml/DataModel1.png' for the Data Model Diagram.

## 3. Contract address
Supply chain contract address:  0xA00b950F1b1ac00ca72c72E45208397288e327E9
transaction hash: 0xc57b9db09bfd4d3bed4b553af887843c634a2e25ffaa4c2c4cc4dae9b77fba63

https://rinkeby.etherscan.io/tx/0xc57b9db09bfd4d3bed4b553af887843c634a2e25ffaa4c2c4cc4dae9b77fba63

### 3.1 Detailed outputs
```
2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0x4cb341695142b58f593b7214655d1b700303ce4db9932fd238922916d5bbf11f
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 5
   > contract address:    0xA3Fa2a82C7FF5a0021648E1D48873344F5f04434
   > block number:        7085015
   > block timestamp:     1598431053
   > account:             0xA7295Ba7cacec1a9446F2d894C4C0666eED49195
   > balance:             1.992310262999
   > gas used:            313821 (0x4c9dd)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00313821 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0x58f55f7e79ad7f132aa8bc49703478b52bff10a9d135cc7d1533aff8d4a7af68
- Blocks: 0            Seconds: 0
   > Blocks: 1            Seconds: 17
   > contract address:    0xC0C0Cae2ec92F3AE5E73E280368EE9f41ebBB2c0
   > block number:        7085017
   > block timestamp:     1598431083
   > account:             0xA7295Ba7cacec1a9446F2d894C4C0666eED49195
   > balance:             1.989737382999
   > gas used:            257288 (0x3ed08)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00257288 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0x542b44ddde9e8081b6e09e558834155f4d74aadce46bfb822e7c7fd401514f87
- Blocks: 0            Seconds: 0
   > Blocks: 2            Seconds: 21
   > contract address:    0x64e4a581Bfbce462f01F6F1f695e93D638E37ceC
   > block number:        7085019
   > block timestamp:     1598431113
   > account:             0xA7295Ba7cacec1a9446F2d894C4C0666eED49195
   > balance:             1.986598932999
   > gas used:            313845 (0x4c9f5)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00313845 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0x087aba363298e6be747aedf9cc4da861c404169100abb9ef66852cb8e17cbefd
- Blocks: 0            Seconds: 0
   > Blocks: 1            Seconds: 21
   > contract address:    0xc916950EeAf120850855f7fFd551F8E973c3dCa2
   > block number:        7085021
   > block timestamp:     1598431143
   > account:             0xA7295Ba7cacec1a9446F2d894C4C0666eED49195
   > balance:             1.983460722999
   > gas used:            313821 (0x4c9dd)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00313821 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xc57b9db09bfd4d3bed4b553af887843c634a2e25ffaa4c2c4cc4dae9b77fba63
- Blocks: 0            Seconds: 0
   > Blocks: 2            Seconds: 21
   > contract address:    0xA00b950F1b1ac00ca72c72E45208397288e327E9
   > block number:        7085023
   > block timestamp:     1598431173
   > account:             0xA7295Ba7cacec1a9446F2d894C4C0666eED49195
   > balance:             1.961303102999
   > gas used:            2215762 (0x21cf52)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02215762 ETH


- Saving migration to chain.
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03414537 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.03653131 ETH
```