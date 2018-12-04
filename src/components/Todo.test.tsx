import * as React from "react";
import * as enzyme from "enzyme";
import Todo from "./Todo";

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("renders text when completed=true", () => {
  const onDummy = () => {
    return;
  };
  const hello = enzyme.shallow(
    <Todo completed={true} text="hello" onClick={onDummy} />
  );

  expect(hello.find("li").text()).toEqual("hello");
  //expect(hello.find("li").props().style.textDecoration).toEqual("line-through");
});

it("renders text when completed=false", () => {
  const onDummy = () => {
    return;
  };
  const hello = enzyme.shallow(
    <Todo completed={false} text="hello" onClick={onDummy} />
  );

  expect(hello.find("li").text()).toEqual("hello");
  //expect(hello.find("li").props().style.textDecoration).toEqual("none");
});
