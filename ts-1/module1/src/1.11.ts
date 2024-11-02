{
    // ternary oprator || optional chaning || nullish coa;esing

    const age: number = 18;

    if (age >= 18) {
        console.log("adult");
    } else {
        console.log('Not adult');
    }

    const isAdult = age >= 18 ? 'Adult' : 'not adult';
    console.log(isAdult);

    // nullish oprater

    // null/ undifind ---> decishin making
    const isAuthentcated = null
    const result1 = isAuthentcated ?? 'Gest';
    console.log({ result1 });

    const result2 = isAuthentcated ? isAuthentcated : 'Gust';
    console.log({ result2 });

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanetAddress?: string;
        }
    }

    const user: User = {
        name: 'saurav',
        address: {
            city: 'khulna',
            road: 'Awesome road',
            presentAddress: 'ctg town'
        }
    }

    const permanetAddress = user?.address?.permanetAddress ?? 'No Perment Address';
    console.log({ permanetAddress })
}