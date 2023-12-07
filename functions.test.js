const functions = require('./functions')

describe('Mean Function Tests', function() {
    test("Tests mean with valid numbers", () => {
       expect(functions.mean(["1", "3", "5", "7"])).toEqual(4)
    })
    
    test("Tests invalid number entry", () => {
        let obj = {isValid: false, num: "f"}

        expect(functions.mean("foo", "2", "3")).toEqual(obj) 
    })
})

describe('Median Function Tests', function() {
    test("Tests median with odd amount of valid numbers", () => {
       expect(functions.median(["1", "9", "5", "7", "3"])).toEqual(5)
    })
    
    test("Tests median with even amount of valid numbers", () => {
        expect(functions.median(["1", "3", "5", "7"])).toEqual(4)
        
    })

    test("Tests invalid number entry", () => {
        let obj = {isValid: false, num: "f"}

        expect(functions.median("foo", "2", "3")).toEqual(obj) 
    })
})

describe('Mode Function Tests', function() {
    test("Tests mode with valid numbers", () => {
       expect(functions.mode(["1", "3", "5", "7", "7", "9"])).toEqual("7")
    })
    
    test("Tests invalid number entry", () => {
        let obj = {isValid: false, num: "f"}

        expect(functions.mode("foo", "2", "3")).toEqual(obj) 
    })
})

