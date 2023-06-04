import Chance from 'chance';

const chance = Chance();

export const fakeUserata = () => {
    console.log('chance.name',chance.name({ middle: true }))
    return chance.name({ middle: true }) ;
}

// fakeUserata();