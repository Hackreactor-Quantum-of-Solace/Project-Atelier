import React from "react";

// import render from "react-test-renderer";
// import '@testing-library/jest-dom';
import {render, fireEvent, waitFor, screen} from "@testing-library/react";

import RelatedItems from "../../client/src/components/relatedItems.jsx";
import RelatedProductsList from "../../client/src/components/relatedItems/RelatedProductsList.jsx"


//snapshot test of RelatedItems
// describe("RelatedItems Snapshot", function () {
//   it ("should have related items components", function () {
//     const component = render.create(
//       <RelatedItems productId={71697}/>
//       );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
//unit test
describe("Related Products List", () => {
  it ("should show Title when related Products List render", () => {
    render(<RelatedProductsList />);
    const element = screen.getByRole("heading")
    expect(element).toBeInTheDocument();
  })
})


