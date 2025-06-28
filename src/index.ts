// Basic

let id: number = 1
let company: string = "sss"
let isPublish: boolean = true

// any use of any data type
let x: any = "ssss"
x = 22

// declare
let age: number
age = 222


// Array
let ids: number[] = [12,4,5,6]
let eids: any[] = ["aa", true, 111]

// Tuple
let person : [string, number, boolean] = ["sss",123, false]

// Tuple Array
let emp : [string, boolean, number, any][]

emp = [
    ["str",false, 234, "asdfsd"],
    ["strs",true, 23456, false],
    ["str",false, 2345674, 234]
]

// Union
let pid : string | number | boolean
pid = true // support optional for string or number or boolean




