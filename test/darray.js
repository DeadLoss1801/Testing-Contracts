const Darray = artifacts.require("Darray");

contract("Darray", () => {
    let darray;

    before(async () => {
        darray = await Darray.deployed();
    })

    it("Should insert an element into an array arr", async () => {


        await darray.insert(10);
        const element = await darray.arr(0);

        // convert it to Number 
        assert(element.toNumber() == 10)
    })
    it("Should get an element from arr array", async () => {

        await darray.insert(20);
        const element = await darray.arr(1);

        assert(element.toNumber() === 20);
    })

    it("Should return the length of arr", async () => {


        const length = await darray.length();
        assert(length.toNumber() == 2);

    })

    it("Should get all  the elements of arr", async () => {
        const arr = await darray.getAll();
        const element = arr.map((el) => el.toNumber());

        assert.deepEqual(element, [10, 20])
    })
})