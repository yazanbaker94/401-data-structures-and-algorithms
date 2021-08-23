const PseudoQueue = require("./pseudo-queue");
// const { includes } = require("../linked-list/linked-list");

class AnimalShelter {
  constructor() {
    this.animal = new PseudoQueue();
  }

  enqueueShelter(animal) {
    if (animal === "dog") {
      this.animal.enqueue(animal);
    } else if (animal === "cat") {
      this.animal.enqueue(animal);
    } else if (animal !== "dog" || animal !== "cat") {
      return "add only cat or dog";
    }
  }

  dequeueShelter(pref) {
    if (!this.animal.stack1.head) {
      return null;
    }

    if (pref === "dog" || pref === "cat") {
      let check = this.animal.stack1.head.value;
      while (check) {
        // console.log("this is", check);
        // console.log("this are", pref);
        // console.log("=========");
        check === pref ? true : (check = this.animal.stack1.head.next.value);

        // console.log(check);
        return check;
      }
      return undefined;
    }
  }
}

module.exports = AnimalShelter;

