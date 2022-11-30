import useFetchData from '../useFetchData';
import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-test-renderer';

describe('useFetchData custom hook component test', () => {

  let fetchShows = jest.fn();

  let fetchMock = global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ returnedData: "foo1" }),
    }),
  ) as jest.Mock;

  test("useFetchData hooks and fetch api should return correct data", async () => {

    const { result } = renderHook(() => useFetchData());

    waitFor(() => {
      expect(fetchMock).toHaveBeenCalled();
      expect(result.current).toBe({
        returnedData: "foo1"
      });
    });

  });

  test("fetchShows called", async () => {

    const { result } = renderHook(() => useFetchData());
    waitFor(() => {
      expect(fetchShows).toHaveBeenCalled();
    });

  });

})
