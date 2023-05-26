const http = require('http');

function makeHttpRequest(page, sum = 0) {
  const options = {
    hostname: 'example.com',
    path: `/api/data?page=${page}`,
    method: 'GET',
  };

  const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      // Process the received data
      const parsedData = JSON.parse(data);
      sum += parsedData.total;

      // Implement pagination logic here
      const nextPage = page + 1;
      if (nextPage <= 3) {
        makeHttpRequest(nextPage, sum);
      } else {
        // All pages have been processed, return the sum
        console.log('Total sum:', sum);
      }
    });
  });

  req.on('error', (error) => {
    console.error(`An error occurred: ${error}`);
  });

  req.end();
}

// Start making requests with page 1
makeHttpRequest(1);
