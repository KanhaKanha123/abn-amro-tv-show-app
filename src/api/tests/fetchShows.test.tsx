import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import { RoutesConfig } from '../../constants/routes.constant';
import { fetchShow, fetchShows } from '../fetchShows';
import { showsMockData } from './fixture/test-data';

describe.only('fetchShows.test test', () => {
  // declare which API requests to mock
  const server = setupServer(
    rest.get(`${RoutesConfig.apiShows}?page=1`, (req, res, ctx) => {
      // respond using a mocked JSON body
      return res(ctx.json({ showsMockData }))
    }),
  )

  // establish API mocking before all tests
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())
  // clean up once the tests are done
  afterAll(() => server.close())

  test('fetchShows() succes', async () => {
    server.use(
      rest.get(`${RoutesConfig.apiShows}?page=1`, (req, res, ctx) => {
        return res(ctx.json(showsMockData))
      })
    );

    const shows = await fetchShows(1);

    await expect(shows).toHaveLength(1);
  });

  test.skip('fetchShows() failure', async () => {
    server.use(
      rest.get(`${RoutesConfig.apiShows}?page=undefined`, (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    )
    await expect(fetchShow(1)).rejects.toThrow('Internal Server Error');
  });

}
);
