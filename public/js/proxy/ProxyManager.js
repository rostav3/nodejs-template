class ProxyManager {
    BASE_URL = "";
    static get instance() {
        if (!ProxyManager._instance) {
            ProxyManager._instance = new ProxyManager();
        }
        return ProxyManager._instance;
    }
}
