{
    type GenerecArray<T> = Array<T>
    type User = {
        name: string;
        age: number;
    }

    const user: GenerecArray<User> = [
        { name: 'saurav', age: 23 },
        { name: 'sarkar', age: 34 },
    ]

    // interface - generic
    interface Developer<T, Y=null> {
        name: string;
        computer: {
            brand: string,
            model: string,
            year: number
        },
        smartWatch: T,
        bick?: Y
    }

    interface poorWatch { 
        brand: string, 
        model: string, 
        display: string 
    }
    const poooperDeveloper: Developer<poorWatch> = {
        name: 'saurav',
        computer: {
            brand: 'hp',
            model: 'pavilion',
            year: 2023
        },
        smartWatch: {
            brand: 'boat',
            model: 'sigma 3',
            display: 'Lcd'
        }
    }

    interface richWatch { 
        brand: string, 
        model: string, 
        display: string, 
        heardTrack: boolean, 
        sleeptrack: boolean 
    }

    const richDeveloper: Developer<richWatch,{model:string,cc:string}> = {
        name: 'Rich',
        computer: {
            brand: 'Apple',
            model: 'pavilion',
            year: 2024
        },
        smartWatch: {
            brand: 'Apple',
            model: 'sigma 3',
            display: 'Oled',
            heardTrack: true,
            sleeptrack: true
        },
        bick:{
            model:'r15',
            cc:'150'
        }
    }

}