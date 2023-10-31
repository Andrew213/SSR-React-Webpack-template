enum METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
  }
  type Options = {
    method: METHOD;
    data?: any;
    headers?: Record<string, string>;
  };
  
  type OptionsWithoutMethod = Omit<Options, "method">;
  
  export default class HTTPTransport {
    // static API_URL = "https://ya-praktikum.tech/api/v2";
    static API_URL = "https://oauth.yandex.ru";
    protected endpoint: string;
  
    constructor(endpoint: string) {
      this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }
  
    public get<Response>(path: string, options: OptionsWithoutMethod = {}): Promise<Response> {
      return this.request(this.endpoint + path, { ...options, method: METHOD.GET });
    }
  
    public post<Response>(path: string, data?: any, headers?: Record<string, string>): Promise<Response> {
      return this.request(this.endpoint + path, { data, method: METHOD.POST, headers });
    }
  
    public put<Response>(
      path: string,
      data: any,
      headers?: Record<string, string>
    ): Promise<Response> {
      return this.request(this.endpoint + path, { data, headers, method: METHOD.PUT });
    }
  
    public patch(path: string, data: any): Promise<Response> {
      return this.request(this.endpoint + path, { data, method: METHOD.PATCH });
    }
  
    public delete(path: string, data?: any): Promise<Response> {
      return this.request(this.endpoint + path, { data, method: METHOD.DELETE });
    }
  
    request<Response>(url: string, options: Options = { method: METHOD.GET }): Promise<Response> {
      const { method, data, headers } = options;
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
  
        xhr.onload = function () {
          resolve(xhr.response);
        };
        // if (headers) {
        //   Object.entries(headers).forEach(([key, value]) => {
        //     xhr.setRequestHeader(key, value);
        //   });
        // } else {
        //   xhr.setRequestHeader("Content-Type", "application/json");
        // }

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  
        xhr.onabort = reject;
        xhr.onerror = reject;
        xhr.ontimeout = reject;
        xhr.onload = () => {
          if (xhr.status >= 300) {
            reject(xhr);
          } else {
            resolve(xhr.response);
          }
        };
  
        xhr.withCredentials = true;
        // xhr.responseType = "json";
  
        if (method === METHOD.GET || !data) {
          xhr.send();
        } else {
          xhr.send(data);
        }
      });
    }
  }