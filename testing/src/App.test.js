import React from "react";
import renderer from "react-test-renderer";
import App from "/home/sprung/hackreactor/Project-Atelier/client/src/components/App.jsx";


describe("App Component", function () {
  it("should have hello world message", function () {
    console.log(App);
    const component = renderer.create(
      <App page="http://www.facebook.com">Facebook</App>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // let getByText = renderer(<App />);
    // expect(getByText("Hello World")).toMatchInlineSnapshot(`
    //   <h1>
    //     Hello world
    //   </h1>
    // `);
  });
});