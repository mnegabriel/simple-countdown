const timeMap = new Map([
    ["miliseconds", { divider: 1000 }],
    ["seconds", { divider: 60 }],
    ["minutes", { divider: 60 }],
    ["hours", { divider: 24 }],
    ["days", { divider: 30 }]
]);

export function getTimeDifference(timeInMiliseconds) {

    const brokenDown = {};

    [...timeMap.entries()].forEach(([key, val]) => {

        if (key === "days") {
            brokenDown[key] = timeInMiliseconds;
        } else {
            const rest = timeInMiliseconds % divider;

            timeInMiliseconds = (timeInMiliseconds - rest) / divider;
            brokenDown[key] = rest;
        }
    })

    return brokenDown;
}