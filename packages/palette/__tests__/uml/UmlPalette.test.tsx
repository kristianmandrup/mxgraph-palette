import { UmlPalette } from "../../..";
import { editorUi } from "../mocks";
// import { Sidebar } from "../../..";

describe("UmlPalette", () => {
  // const editorElem = document.createElement("editor");
  const $sidebar = {}; // new Sidebar(editorUi, editorElem);
  const create = (sidebar = $sidebar) => new UmlPalette(sidebar);

  let palette;
  beforeAll(() => {
    palette = create();
  });

  describe("instance", () => {
    describe("sidebar", () => {
      test("to be set", () => {
        expect(palette.sidebar).toBe($sidebar);
      });
    });
  });
});
