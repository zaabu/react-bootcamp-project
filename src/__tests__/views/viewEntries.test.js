import React from "react";
import { shallow, configure } from "enzyme";
import entriesView from "../../views/entries/ViewEntries";
import { ViewDiariesTest } from "../../components/entries/viewEntries";
import Adapter from "enzyme-adapter-react-16";
configure ({ adapter: new Adapter() });

// it("test view all entries view component", () => {
//     let component = shallow(<entriesView />);
//     var node = component.find(".article-column");
//     expect(node.length).toEqual(1)
// });

it("test view run component will receive props", () => {
    let component = shallow(<ViewDiariesTest dispatch={jest.fn()} />);
    component.setProps({
        entry: {
            message: "diary entry added successfully."
        },
        deleted: { message: "Diary entry deleted successfully" }
    });
});

it("test view run component return messages", () => {
    let component = shallow(<ViewDiariesTest dispatch={jest.fn()} />);
    component.setProps({
    entry: {
      message: "diary entry added successfully."
    },
    deleted: { Message: "Diary entry deleted successfully" },
    modified: { Message: "diary entry updated succesfully" }
  });
    
})

it("test view run component handle delete", () => {
    let dispatch = jest.fn();
    let component = shallow(<ViewDiariesTest dispatch={dispatch} />);
    component.instance().handleDelete(1);
    expect(dispatch).toBeCalled();
})

