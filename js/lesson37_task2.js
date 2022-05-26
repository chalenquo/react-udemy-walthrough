const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const teamSize = 3;
    let finalTeams = [];
    for (let i = 0; i < arr.length; i += teamSize) {
        const team = arr.slice(i, i + teamSize);
        // console.log(team)
        if (team.length < teamSize) {
            finalTeams.push(`Оставшиеся студенты: ${team.join(', ')}`);
        } else {
            finalTeams.push(team);
        }
    }
    if (finalTeams.length % 3 === 0) {
        finalTeams.push('Оставшиеся студенты: -');
    }
    return finalTeams;
}


console.log(sortStudentsByGroups(students))