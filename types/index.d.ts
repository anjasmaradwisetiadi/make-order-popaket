import type { CancelTokenStatic } from 'axios';

declare module 'axios' {
  interface AxiosRequestConfig {
    microService?: string;
  }
}

declare module '@nuxtjs/axios' {
  interface NuxtAxiosInstance {
    CancelToken: CancelTokenStatic;
  }
}
