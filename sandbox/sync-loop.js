const iterable = [
    {
        value: 2,
        label: 'a'
    },
    {
        value: 3,
        label: 'b'
    },
    {
        value: 5,
        label: 'c'
    },
];

function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

async function separate() {
    await wait(5000);
    console.log('====================================');
}

async function makeStep(item, label) {
    console.log(`${label}: starting element ${item.label}`);
    console.log(`${label}: waiting for ${item.value} seconds`);
    await wait(item.value * 1000);
    console.log(`${label}: finishing element ${item.label}`);
    console.log(`${label}: --------------------------------`);
}

async function withFor() {
    for (let i = 0; i < iterable.length; i += 1) {
        await makeStep(iterable[i], 'for');
    }
}

async function withReduce() {
    await iterable.reduce(
        (current, next) => current.then(() => makeStep(next, 'reduce')),
        Promise.resolve(),
    );
}

async function withMap() {
    await Promise.all(iterable.map(async (item) => {
        await makeStep(item, 'map')
    }));
}

async function main() {
    await withFor();
    await separate();
    await withReduce();
    await separate();
    await withMap();
}

main();