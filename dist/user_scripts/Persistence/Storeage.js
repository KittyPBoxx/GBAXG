function StorageManager() {
    this.db = new Dexie("X3-GMR");
    this.db.version(1).stores({ files: "&name" });
}

StorageManager.prototype.persist = function (key, value) {
    this.db.files.put({ name: key, value: value})
}

StorageManager.prototype.find = function (key) {
    return (async () => {
        let result = await this.db.files.where("name").equals(key).first()
        if (!result) throw new Error("No State Available. A new one will be created on launch...");
        return result.value;
    })();
}

StorageManager.prototype.delete = function (key) {
    return (async () => (await this.db.files.where("name").equals(key).delete()).value)();
}


window.storageManager = new StorageManager(); 