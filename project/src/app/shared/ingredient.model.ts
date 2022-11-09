export class Ingredient {

    // Adding "public" to the constructor parameters automatically
    // declares and assigns the instance fields/values.  Pretty
    // nifty, eh?
    constructor(public name: string, public amount: number) { }
}