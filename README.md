
# Solana Campus Connect S2

This repository contains the source code for the implementation using the web3.js SDK.

## Contents

- `balance.ts`: Contains the logic for fetching and displaying the balance of a Solana wallet.
- `wallet.ts`: Provides functionalities related to Solana wallet operations.
- `token.ts`: Create a token on Solana Blockchain.

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/akshatcoder-hash/solana-campus-connect-s2.git
```

2. Navigate to the project directory:

```bash
cd solana-campus-connect-s2
```

3. Install the required dependencies:

```bash
npm i
```

## Usage

1. First create a wallet using

```bash
ts-node wallet.ts
```

This will create a local wallet into a file named `walet.json`.

2. Now you can fetch the wallet's balance using

```bash
ts-node balance.ts
```

