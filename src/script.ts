import Photon from '@generated/photon'

const photon = new Photon()

// A `main` function so that we can use async/await
async function main() {
  const test = await photon.users.create({
    data: {
      name: 'Harshit Pant',
    },
  })
  console.dir(test, { depth: Infinity })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
