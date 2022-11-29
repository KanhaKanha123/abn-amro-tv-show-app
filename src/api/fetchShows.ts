import { RoutesConfig } from '../constants/routes.constant';
import type { Show, ShowSearch } from '../types/types';

const headers = {
  headers: {
    Accept: 'application/json',
  },
};

export async function fetchShows(page:number): Promise<Show[]> {
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

export async function fetchShow(id: number): Promise<Show> {
  const url = `${RoutesConfig.apiShows}/${id}`;
  const response = await fetch(url, headers);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export async function fetchSearchShows(search: string): Promise<Show[]> {
  const params = new URLSearchParams({
    q: search,
  }).toString();

  const url = `${RoutesConfig.apiSearchShows}?${params}`;
  const response = await fetch(url, headers);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();
  return json.map((item: ShowSearch): Show => item.show);
}
