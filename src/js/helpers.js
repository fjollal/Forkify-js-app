import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} seconds`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  let res;

  try {
    res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
  } catch (err) {
    throw new Error(`Network error: ${err.message}`);
  }

  if (!res) throw new Error('No response from server');

  const data = await res.json();

  if (!res.ok)
    throw new Error(`${data.message || 'Request failed'} (${res.status})`);

  return data;
};

export const sendJSON = async function (url, data) {
  let res;

  try {
    res = await Promise.race([
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
      timeout(TIMEOUT_SEC),
    ]);
  } catch (err) {
    throw new Error(`Network error: ${err.message}`);
  }

  if (!res) throw new Error('No response from server');

  const resData = await res.json();

  if (!res.ok)
    throw new Error(`${resData.message || 'Request failed'} (${res.status})`);

  return resData;
};
