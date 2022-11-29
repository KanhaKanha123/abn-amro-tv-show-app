import useFetchData from '../useFetchData';
import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-test-renderer';

describe('useFetchData custom hook component test', () => {

  let fetchMock = global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({  returnedData: "foo1" }),
    }),
  ) as jest.Mock;

  test("useFetchData hooks and fetch api should return correct data", async () => {

    const { result } = renderHook(() => useFetchData());

    await act(async () => {
     // result.current.setApiUrl("bundle-api.json");
    });

 
    waitFor(() => {
      expect(fetchMock).toHaveBeenCalled();
      expect(result.current).toBe({
        returnedData: "foo1"
      });
    });

  });
})
