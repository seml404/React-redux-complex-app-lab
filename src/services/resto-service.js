export default class RestoService {
  _apiBase = "http://localhost:3000";
  async getResourse(url) {
    // console.log(`${this._apiBase}${url}`);
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Conuld not fetch ${url}`);
    }
    return await res.json();
  }
  async getMenuItems(url) {
    return await this.getResourse("/menu");
  }
}
