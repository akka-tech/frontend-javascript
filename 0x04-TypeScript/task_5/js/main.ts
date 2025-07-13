// Define MajorCredits interface with brand
interface MajorCredits {
  credits: number;
  brand: 'major';
}

// Define MinorCredits interface with brand
interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}

// Example usage
const major1: MajorCredits = { credits: 10, brand: 'major' };
const major2: MajorCredits = { credits: 20, brand: 'major' };
const minor1: MinorCredits = { credits: 5, brand: 'minor' };
const minor2: MinorCredits = { credits: 8, brand: 'minor' };

console.log(sumMajorCredits(major1, major2)); // { credits: 30, brand: 'major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 13, brand: 'minor' }

