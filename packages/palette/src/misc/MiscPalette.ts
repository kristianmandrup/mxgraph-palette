import { AbstractPalette } from "../AbstractPalette";
import mx from "@mxgraph-app/mx";
import { MiscTemplateEntries } from "./MiscTemplateEntries";
import { MiscEntries } from "./MiscEntries";
// import { Sidebar } from "../../";
const { mxResources } = mx;

type ISidebar

export class MiscPalette extends AbstractPalette {
  gearImage: any;

  constructor(sidebar: ISidebar) {
    super(sidebar);
  }

  lineTags =
    "line lines connector connectors connection connections arrow arrows ";

  templateEntries = new MiscTemplateEntries(this.sidebar);
  entries = new MiscEntries(this.sidebar);
  /**
   * Adds the general palette to the sidebar.
   */
  create(expand) {
    const { entries, templateEntries } = this;
    const {
      textHeadingTitle,
      unorderedList,
      orderedList,
      table1,
      table2,
      table3,
      table4,
      doubleRect,
      roundedRectDouble,
      doubleEllipsis,
      doubleSquare,
      doubleCircle,
      comicArrow,
      comicRectangle,
      comicDiamond,
      isometricSquare,
      cubeBoxIsometric,
      isometricEdge1,
      isometricEdge2,
      curlyBracket,
      horizontalLine,
      verticalLine,
      horizontalBackbone,
      verticalBackbone,
      crossbar,
      fixedImage,
      stretchedImage,
      iconImageSymbol,
      imageIconLabel1,
      imageIconLabel2,
      partialRectangle1,
      partialRectangle2,
      manualLine,
      filledEdge,
      horizontalElbow,
      verticalElbow,
    } = templateEntries;

    const { hyperLink, timestamp, variable, shapeGroup } = entries;

    var fns = [
      textHeadingTitle,
      unorderedList,
      orderedList,
      table1,
      table2,
      table3,
      table4,
      hyperLink,
      timestamp,
      variable,
      doubleRect,
      roundedRectDouble,
      doubleEllipsis,
      doubleSquare,
      doubleCircle,
      comicArrow,
      comicRectangle,
      comicDiamond,
      isometricSquare,
      cubeBoxIsometric,
      isometricEdge1,
      isometricEdge2,
      curlyBracket,
      horizontalLine,
      verticalLine,
      horizontalBackbone,
      verticalBackbone,
      crossbar,
      fixedImage,
      stretchedImage,
      iconImageSymbol,
      imageIconLabel1,
      imageIconLabel2,
      shapeGroup,
      partialRectangle1,
      partialRectangle2,
      manualLine,
      filledEdge,
      horizontalElbow,
      verticalElbow,
    ];

    this.addPaletteFunctions(
      "misc",
      mxResources.get("misc"),
      expand != null ? expand : true,
      fns
    );
  }

  get sb() {
    return this;
  }
}
