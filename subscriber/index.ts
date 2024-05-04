import { createClient } from 'redis'

const client = createClient();

async function main() {
  const subscriber = client.duplicate();
  subscriber.subscribe('tes', (message: string, channel: string) => console.log(`From channel: ${channel} \nReceived message: ${message}\n`))
  subscriber.subscribe('client', (message: string, channel: string) => console.log(`From channel: ${channel} \nReceived message: ${message}\n`))
  await subscriber.connect();
}

main()