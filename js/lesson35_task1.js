const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (obj) {
        return `Мне ${obj.age} и я владею языками: ${obj.skills.languages.join(' ').toUpperCase()} `;
    }
};

function showExperience(plan) {
    return plan.skills.exp;
}

function showProgrammingLangs(plan) {
    let str = '';
    const prog = plan.skills.programmingLangs;
    for (let key in prog) {
        str += `Язык ${key} изучен на ${prog[key]}\n`;
    }
    return str;
}


console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))
console.log(showProgrammingLangs(personalPlanPeter));

console.log('123456789'.slice(0, -2))