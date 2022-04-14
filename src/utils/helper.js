export const getData = async (url, token) => {
  try {
    const resp = await fetch(`${url}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const dataFromApi = await resp.json();
    return dataFromApi;
  } catch (error) {
    console.log('getData error', error);
    return false;
  }
};
