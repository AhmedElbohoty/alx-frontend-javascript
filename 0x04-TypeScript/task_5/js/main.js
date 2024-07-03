// Functions
function sumMajorCredits(subject1, subject2) {
    return subject1.credits + subject2.credits;
}
function sumMinorCredits(subject1, subject2) {
    return subject1.credits + subject2.credits;
}
var majorSubject1 = { credits: 4, brand: 'major_credits' };
var majorSubject2 = { credits: 3, brand: 'major_credits' };
var minorSubject1 = { credits: 2, brand: 'minor_credits' };
var minorSubject2 = { credits: 1, brand: 'minor_credits' };
// Sum of major credits
var totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log('Total Major Credits:', totalMajorCredits);
// Sum of minor credits
var totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log('Total Minor Credits:', totalMinorCredits);
