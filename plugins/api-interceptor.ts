import { Plugin } from '@nuxt/types';
const origin = 'tradaru.com';
const protocol = 'https';

const hosts = (isDev: boolean = false) => ({
  auth: `${protocol}://${isDev ? 'authdev' : 'auth'}.${origin}`,
});

export const apiService: Plugin = function ({ $axios, isDev, app }) {
  const cancelSource = $axios.CancelToken.source();

  $axios.onRequest((config) => {
    if (config.microService) {
      config.url = (hosts(isDev) as any)[config.microService];
    }

    config.cancelToken = cancelSource.token;
  });

  $axios.onError(() => {
    return Promise.resolve(false);
  });

  app.beforeDestroy = () => {
    cancelSource.cancel('Cancelled due to changing resource.');
  };
};

export default apiService;
