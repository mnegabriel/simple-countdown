const UUID_API_URL = "https://www.uuidtools.com/api/generate/v1";

export const getUuid = async () => {
    const res = await fetch(UUID_API_URL).then((res) => res.json());

    return res[0];
};