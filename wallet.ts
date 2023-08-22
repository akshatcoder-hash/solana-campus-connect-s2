import { Keypair, LAMPORTS_PER_SOL, Connection } from "@solana/web3.js";
import * as fs from 'fs';

const endpoint = 'https://api.devnet.solana.com';
const solanaConnection = new Connection(endpoint);

const keypair = Keypair.generate();
console.log(`Generated a Wallet with PublicKey: `, keypair.publicKey.toString());

const secret_array = keypair.secretKey    
    .toString() 
    .split(',') 
    .map(value=>Number(value)); 

const secret = JSON.stringify(secret_array); //Convert to JSON string

fs.writeFile('wallet.json', secret, 'utf8', function(err) {
    if (err) throw err;
    console.log('Wrote secret key to wallet.json.');
    });

(async()=>{
    const airdropSignature = solanaConnection.requestAirdrop(
        keypair.publicKey,
        LAMPORTS_PER_SOL,
    );
    try{
        const txId = await airdropSignature;     
        console.log(`Airdropped 1 SOL. Transaction Id: ${txId}`);        
        console.log(`https://explorer.solana.com/tx/${txId}?cluster=devnet`)
    }
    catch(err){
        console.log(err);
    }    
})()