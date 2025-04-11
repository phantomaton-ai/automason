export default async function read(stream) {
  return new Promise((resolve) => {
    let body = '';
    
    // Very short timeout to minimize latency
    const timeout = setTimeout(() => {
      resolve(body);
    }, 5);

    stream.on('readable', () => {
      clearTimeout(timeout);
      let chunk;
      while ((chunk = stream.read()) !== null) {
        body += chunk;
      }
    });

    stream.on('end', () => {
      clearTimeout(timeout);
      resolve(body);
    });
  });
}