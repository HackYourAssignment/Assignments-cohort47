function createObservable() {
  const subscribers = [];
  return {
    subscribe: function (subscriber) {
      // TODO complete this function

      subscribers.push(subscriber());
    },
    notify: function (message) {
      // TODO complete this function
      // subscribers.forEach((subscriber) => {
      //   subscriber.
      // });
    },
  };
}

const observable = createObservable();

// Create two mocked listener functions
const listener1 = jest.fn();
const listener2 = jest.fn();

// Subscribe both function to the observable
