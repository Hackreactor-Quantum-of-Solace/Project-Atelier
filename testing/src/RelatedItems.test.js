import React from "react";
import render from "react-test-renderer";
import App from "../../client/src/components/App.jsx";

describe("relatedItems Component", function () {
  it("should have relatedItems ", function () {
    const component = render.create(
      <App/>
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