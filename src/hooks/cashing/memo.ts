
//for this project as it's not a server call so i did not use the memo function. But it's good to use for cashing.
const memo = (callback: any) => {
  try {
    // We will save the key-value pairs in the following variable. It will be our cache storage
    const cache = new Map();
    return (...args: any) => {
      // The key will be used to identify the different arguments combination. Same arguments means same key
      const key = JSON.stringify(args);
      // If the cache storage has the key we are looking for, return the previously stored value
      if (cache.has(key)) return cache.get(key);
      // If the key is new, call the function (in this case fetch)
      const value = callback(...args);
      // And save the new key-value pair to the cache
      cache.set(key, value);
      return value;
    };
  } catch (err) {
    console.error(err);
  }
};

export default memo;