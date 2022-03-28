const LOCAL_KEY = "simple-counter";

export const localSave = (data) => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
};

export const localLoad = () => {
    const dataString = localStorage.getItem(LOCAL_KEY);
    return dataString ? JSON.parse(dataString) : [];
};