const AnimalShelter = require("../animalShelter");

describe("AnimalShelter test", () => {
  it("enqueue test", () => {
    const qu1 = new AnimalShelter();
    qu1.enqueueShelter("cat");
    expect(qu1.animal.stack1.head.value).toEqual("cat");
    qu1.enqueueShelter("dog");
    expect(qu1.animal.stack1.head.value).toEqual("dog");

    // qu1.enqueueShelter("somethingelse");
    expect(qu1.enqueueShelter("somethingelse")).toEqual("add only cat or dog");
  });

  it("dequeue test", () => {
    const shelter = new AnimalShelter();
    shelter.enqueueShelter("cat");
    shelter.enqueueShelter("dog");

    expect(shelter.dequeueShelter("cat")).toEqual("cat");
    expect(shelter.dequeueShelter("dog")).toEqual("dog");
    expect(shelter.dequeueShelter("anythingelse")).toEqual(undefined);
  });
});