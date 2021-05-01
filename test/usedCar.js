import { expect } from 'chai';
import * as usedCar from "../data.js";

describe("Used Car", function() {
    
    it("get a used car", function() {
        let result = usedCar.getItem("Jeep");
        expect(result).to.deep.equal({brand : "Jeep", year : 2019, color : "White", price: "$69,999"});
    });
    
    it("used car be not found", function() {
        let result = usedCar.getItem("fake");
        expect(result).to.be.undefined;
    });

    it("adds a new used car", function() {
        let result = usedCar.addItem({brand : "Jeep Wrangler", year : 2019, color : "White", price: "$69,999"});
        expect(result.added).to.be.true;
    });
    it("fails to add an existing used car", function() {
        let result = usedCar.addItem({brand : "Jeep", year : 2019, color : "White", price: "$69,999"});
        expect(result.added).to.be.false;
    });

    it("deletes an existing used car", function() {
        let result = usedCar.deleteItem("Jeep");
        expect(result.deleted).to.be.true;
    });
    it("fails to delete an invalid used car", function() {
        let result = usedCar.deleteItem("travels with charlie");
        expect(result.deleted).to.be.false;
    });

});