import { AppDataSource } from "../data-source";
import ThreadWorkes from "./ThreadWorkes";

export default new (class Worker {
  constructor() {
    AppDataSource.initialize()
      .then(async () => {
        await Promise.all([ThreadWorkes.create()]);
      })
      .catch((error) => console.log("Error", error));
  }
})();
