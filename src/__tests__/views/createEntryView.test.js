import React from "react";
import { mount, configure } from "enzyme";
import  CreateEntryView  from "../../views/entries/createEntry";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("test create view component", () => {
    let component = mount(<CreateEntryView />);
    var node = component.find("Modal");
    expect(node.length).toEqual(1);
    expect(component).toBeTruthy();
})