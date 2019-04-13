export class Config {
  private _token:string = '';
  private _status:boolean = false;
  private _API_ENDPOINT = '';

  getToken(): string {
    return this._token;
  }

  setToken(value: string) {
    this._token = value;
  }

  getStatus(): boolean {
    return this._status;
  }

  setStatus(value: boolean) {
    this._status = value;
  }

  getAPI_ENDPOINT(): string {
    return this._API_ENDPOINT;
  }

}
