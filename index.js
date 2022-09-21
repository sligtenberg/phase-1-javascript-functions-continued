function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(flare = '*') {
    return function (howeverYouWish = 'special') {
        return `You are ${flare}${howeverYouWish}${flare}!`
    }
}