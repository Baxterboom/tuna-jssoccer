export interface IQueryOptions {

}

export default class PlayersApi {
  public get() {
    return fetch("/");
  }
}

