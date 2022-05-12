# Solfège

The sound of the Solana Blockchain.

Listen to the beauty at https://solfege.surge.sh

## What?

Simply, this is opening an RPC connection to Solana,
listening for new slots, counting the number of transactions in that slot,
and converting it to a sound. The higher the frequency, the more transactions were in the slot.

So if you hear "middle C", that means roughly 261 transactions were just confirmed.

## Why?

No reason.

## How?

This project uses [tone.js](https://www.npmjs.com/package/tone) to synthesize the sounds.