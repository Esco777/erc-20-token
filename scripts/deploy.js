async function main() {
  console.log(`Preparing deployment...\n`)

  //Fetch contract to deploy
  const Token = await ethers.getContractFactory('Token')

  // Fetch accounts
  const accounts = await ethers.getSigners()

  console.log(`Accounts fetched:\n${accounts[0].address}\n`)

  // Deploy contract
  const dcb = await Token.deploy('Decentra Block', 'DCB', '1000000000')
  await dcb.deployed()
  console.log(`Decentra Block Deployed to: ${dcb.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exit(1);
});
