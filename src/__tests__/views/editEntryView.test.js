import React from "react";
import { mount, configure } from "enzyme";
 
import EditEntryView from "../../views/entries/editEntryView";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter()});

it("test edit view component", () => {
    let component = mount(<EditEntryView />);
    var node = component.find("Modal");
    expect(node.length).toEqual(1);
    expect(component).toBeTruthy();
});
