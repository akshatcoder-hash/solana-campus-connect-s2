import { Keypair, Connection, clusterApiUrl } from "@solana/web3.js";
import * as fs from 'fs';

const connection = new Connection(clusterApiUrl('devnet'));

const secretKeyArray: number[] = JSON.parse(fs.readFileSync('wallet.json', 'utf8'));
const keypair = Keypair.fromSecretKey(new Uint8Array(secretKeyArray));

connection.getBalance(keypair.publicKey).then(balance => {
    console.log(`Balance for the public key ${keypair.publicKey.toString()}: ${balance / 1e9} SOL`);
});
