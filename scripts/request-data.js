let MyContract = artifacts.require("MyContract");

/*
  This script allows for a Chainlink request to be created from
  the requesting contract. Defaults to the Chainlink oracle address
  on this page: https://docs.chain.link/docs/testnet-oracles
*/

const oracleAddress = "0xc99B3D447826532722E41bc36e644ba3479E4365";
const jobId = "9f0406209cf64acda32636018b33de11";
const payment = "1000000000000000000";
const url = "https://ethgasstation.info/json/ethgasAPI.json";
const path = "FAST";
const times = "2";

module.exports = async callback => {
  let mc = await MyContract.deployed();
  console.log("Creating request on contract:", mc.address);
  let tx = await mc.createRequestTo(
    oracleAddress,
    web3.utils.toHex(jobId),
    payment,
    url,
    path,
    times
  );
  callback(tx.tx);
};
