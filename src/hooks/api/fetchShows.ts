import { RoutesConfig } from '../../constants/constant';
import type { ShowAllData } from '../../types/types';

const headers = {
  headers: {
    Accept: 'application/json',
  },
};

export async function fetchShows(page: number): Promise<ShowAllData[]> {
  const params = new URLSearchParams({
    page: page as unknown as string,
  }).toString();

  const url = `${RoutesConfig.apiShows}?${params}`;
  const response = await fetch(url, headers);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

/**I did not use because i collected data in the state already
export async function fetchShow(id: number): Promise<ShowAllData> {
  const url = `${RoutesConfig.apiShows}/${id}`;
  const response = await fetch(url, headers);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
**/
