class Manager {

    static get instance(){
        if (!Manager._instance) {
            Manager._instance = new Manager();
        }
        return Manager._instance;
    }
    initProject() {
    }

}
