import { AbstractPalette } from "../AbstractPalette";
// import { Sidebar } from "../../";

type ISidebar

export class ImagePalette extends AbstractPalette {
  defaultImageWidth: any;
  defaultImageHeight: any;
  filterTags: any;

  constructor(sidebar: ISidebar) {
    super(sidebar);
    this.defaultImageWidth = sidebar.defaultImageWidth;
    this.defaultImageHeight = sidebar.defaultImageHeight;
  }

  /**
   * Adds the given image palette.
   */

  create(opts: any = {}) {
    const { id, title, prefix, postfix, items, titles, tags } = opts;
    // var showTitles = titles != null;
    var fns: any[] = [];

    for (var i = 0; i < items.length; i++) {
      const addItem = (item, title, tmpTags) => {
        if (tmpTags == null) {
          var slash = item.lastIndexOf("/");
          var dot = item.lastIndexOf(".");
          tmpTags = item
            .substring(slash >= 0 ? slash + 1 : 0, dot >= 0 ? dot : item.length)
            .replace(/[-_]/g, " ");
        }

        fns.push(
          this.createVertexTemplateEntry(
            "image;html=1;labelBackgroundColor=#ffffff;image=" +
              prefix +
              item +
              postfix,
            this.defaultImageWidth,
            this.defaultImageHeight,
            "",
            title,
            title != null,
            null,
            this.filterTags(tmpTags)
          )
        );
      };
      addItem(
        items[i],
        titles != null ? titles[i] : null,
        tags != null ? tags[items[i]] : null
      );
    }

    this.addPaletteFunctions(id, title, false, fns);
  }
}
