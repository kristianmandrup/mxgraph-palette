import { MiscPalette } from "./misc";
import { BasicPalette } from "./basic";
import { GeneralPalette } from "./general";
import { ImagePalette } from "./image";
import { SearchPalette } from "./search";
import { StencilPalette } from "./stencil";
import { UmlPalette } from "./uml";
import { BpmnPalette } from "./bpmn";
import { PaletteDelegator } from "./PaletteDelegator";
import { AdvancedShapes } from "./shapes";
import { PaletteAdder } from "./adder";
// import { Sidebar } from "../side";
import mx from "@mxgraph-app/mx";
const { mxResources } = mx;
import resources from "@mxgraph-app/resources";

type ISidebar

const { STENCIL_PATH } = resources;

export class Palettes extends PaletteDelegator {
  paletteMap: any = {
    basic: BasicPalette,
    misc: MiscPalette,
    general: GeneralPalette,
    image: ImagePalette,
    search: SearchPalette,
    stencil: StencilPalette,
    uml: UmlPalette,
    bpmn: BpmnPalette,
  };
  paletteAdder: any;

  advancedShapes: any;
  dir: any = STENCIL_PATH;

  constructor(sidebar: ISidebar, paletteMap?: any) {
    super(sidebar);
    this.paletteMap = paletteMap || this.paletteMap;
    this.advancedShapes = new AdvancedShapes();
    this.paletteAdder = new PaletteAdder(sidebar);
  }

  addPalette(id, title, expanded, onInit) {
    this.paletteAdder.addPalette(id, title, expanded, onInit);
  }

  addAll(expansion: any = {}) {
    this.addMiscPalette(expansion.misc);
    this.addAdvancedPalette(expansion.advanced);
    this.addSearchPalette(true);
    this.addGeneralPalette(true);
    this.addMiscPalette(false);
    this.addAdvancedPalette(false);
    this.addBasicPalette(this.dir);

    this.addArrowsPalette();
    this.addFlowchartPalette();
  }

  addArrowsPalette() {
    this.addStencilPalette(
      "arrows",
      mxResources.get("arrows"),
      this.dir + "/arrows.xml",
      ";whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;strokeWidth=2"
    );
  }

  addFlowchartPalette() {
    this.addStencilPalette(
      "flowchart",
      "Flowchart",
      this.dir + "/flowchart.xml",
      ";whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;strokeWidth=2"
    );
  }

  addStencilPalette(
    id,
    title,
    stencilFile,
    style,
    ignore?,
    onInit?,
    scale?,
    tags?,
    customFns: any[] = []
  ) {
    new this.paletteMap.stencil().create(
      id,
      title,
      stencilFile,
      style,
      ignore,
      onInit,
      scale,
      tags,
      customFns
    );
  }

  addSearchPalette(expand?) {
    new this.paletteMap.search().create(expand);
  }

  addGeneralPalette(expand?) {
    new this.paletteMap.general().create(expand);
  }

  addBasicPalette(dir) {
    new this.paletteMap.general().create(dir);
  }

  /**
   * Adds the general palette to the sidebar.
   */
  addMiscPalette(expand?) {
    new this.paletteMap.misc().create(expand);
  }

  /**
   * Adds the container palette to the sidebar.
   */
  addAdvancedPalette(expand?) {
    this.addPaletteFunctions(
      "advanced",
      mxResources.get("advanced"),
      expand != null ? expand : false,
      this.createAdvancedShapes()
    );
  }

  createAdvancedShapes() {
    return this.advancedShapes.createAdvancedShapes();
  }

  /**
   * Adds the given palette.
   */
  addPaletteFunctions(id, title, expanded, fns: any[] = []) {
    this.addPalette(id, title, expanded, (content) => {
      for (var i = 0; i < fns.length; i++) {
        content.appendChild(fns[i](content));
      }
    });
  }

  /**
   * Adds the general palette to the sidebar.
   */
  addUmlPalette(expand?) {
    new this.paletteMap.uml().addUmlPalette(expand);
  }

  addBpmnPalette(dir, expand?) {
    new this.paletteMap.bpmn().addBpmnPalette(dir, expand);
  }

  addImagePalette(id, { title, prefix, postfix, items, titles, tags }) {
    new this.paletteMap.image().addImagePalette(
      id,
      title,
      prefix,
      postfix,
      items,
      titles,
      tags
    );
  }
}
