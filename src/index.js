const { Connection, clusterApiUrl } = require('@solana/web3.js');
const Tone = require('tone');

const connection = new Connection(clusterApiUrl('mainnet-beta'));
let callbackId;

//attach a click listener to a play button
document.querySelector('button#play')?.addEventListener('click', async () => {
  await Tone.start()
  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination();

  callbackId = connection.onSlotUpdate(async (slotUpdate) => {
    if (slotUpdate.type !== 'frozen') return;

    console.log(slotUpdate.stats.numSuccessfulTransactions);
    synth.triggerAttackRelease(slotUpdate.stats.numSuccessfulTransactions, '32n')
  })
})

document.querySelector('button#stop')?.addEventListener('click', async () => {
  connection.removeSlotUpdateListener(callbackId)
})