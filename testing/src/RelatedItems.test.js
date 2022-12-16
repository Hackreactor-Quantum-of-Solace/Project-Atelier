import React from "react";
import render from "react-test-renderer";
import RelatedItems from "../../client/src/components/relatedItems.jsx";

//snapshot test of RelatedItems
describe("relatedItems Component", function () {
  it("should have relatedItems ", function () {
    const component = render.create(
      <RelatedItems productId={71697}/>
      );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
//unit test
describe('My test suite', function () {
  it('My test case', function () {
    expect(true).toEqual(true);
  })
})

