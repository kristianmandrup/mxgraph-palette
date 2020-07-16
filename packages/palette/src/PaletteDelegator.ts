// import { Sidebar } from "../side";
type ISidebar

export abstract class PaletteDelegator {
  sidebar: ISidebar;
  constructor(sidebar: ISidebar) {
    this.sidebar = sidebar;
  }

  /**
   * Removes the palette for the given ID.
   */
  removePalette(id) {
    var elts = this.palettes[id];

    if (elts != null) {
      this.palettes[id] = null;

      for (var i = 0; i < elts.length; i++) {
        this.container.removeChild(elts[i]);
      }

      return true;
    }

    return false;
  }

  get collapsedImage() {
    return this.sidebar.collapsedImage;
  }

  get expandedImage() {
    return this.sidebar.expandedImage;
  }

  get palettes() {
    return this.sidebar.palettes;
  }

  get documentMode() {
    return this.sidebar.documentMode;
  }

  get container() {
    return this.sidebar.container;
  }

  /**
   * Creates and returns the given title element.
   */
  createTitle(label) {
    return this.sidebar.createTitle(label);
  }
}
