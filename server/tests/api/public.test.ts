import { createSigner } from 'fast-jwt';
import { COOKIE_NAME } from 'service/constants';
import { expect, test } from 'vitest';
import { createSessionClients, noCookieClient } from './apiClient';
import { DELETE, GET, POST } from './utils';

test(GET(noCookieClient), async () => {
  const { apiClient } = await createSessionClients();
  const res = await apiClient.$get();

  expect(res).toEqual('');
});

test(GET(noCookieClient.health), async () => {
  const { apiClient } = await createSessionClients();
  const res = await apiClient.health.$get();

  expect(res.server).toEqual('ok');
  expect(res.db).toEqual('ok');
  expect(res.storage).toEqual('ok');
});

test(POST(noCookieClient.session), async () => {
  const jwt = createSigner({ key: 'dummy' })({ exp: Math.floor(Date.now() / 1000) + 100 });
  const res = await noCookieClient.session.post({ body: { jwt } });

  expect(res.headers['set-cookie'][0].startsWith(`${COOKIE_NAME}=${jwt};`)).toBeTruthy();
  expect(res.body.status === 'success').toBeTruthy();
});

test(DELETE(noCookieClient.session), async () => {
  const { apiClient } = await createSessionClients();
  const res = await apiClient.session.delete();

  expect(res.headers['set-cookie'][0].startsWith(`${COOKIE_NAME}=;`)).toBeTruthy();
  expect(res.body.status === 'success').toBeTruthy();
});
