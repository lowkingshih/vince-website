import { faker } from '@faker-js/faker';

const range = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {
    return {
        airportName: faker.name.firstName(),
        airportAdress: faker.name.lastName(),
        airportLon: faker.datatype.float({ precision: 5, min: 20, max: 30 }),
        airportLat: faker.datatype.float({ precision: 5, min: 120, max: 123 }),
        radio1: true,
        radio2: false,
        radio3: false,
    };
};

export function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map((d) => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            };
        });
    };

    return makeDataLevel();
}

const data = makeData(10000);

export async function fetchData(options) {
    // Simulate some network latency
    await new Promise((r) => setTimeout(r, 500));

    return {
        rows: data.slice(options.pageIndex * options.pageSize, (options.pageIndex + 1) * options.pageSize),
        pageCount: Math.ceil(data.length / options.pageSize),
        total: 10000,
    };
}
