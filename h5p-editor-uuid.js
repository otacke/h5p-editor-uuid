(function(){
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var _a, _b;
const H5P = (_a = window.H5P) != null ? _a : {};
const H5PEditor = (_b = window.H5PEditor) != null ? _b : {};
class H5PWidget extends H5P.EventDispatcher {
  constructor(parent, field, params, setValue) {
    super();
    __publicField(this, "field");
    __publicField(this, "parent");
    __publicField(this, "params");
    __publicField(this, "setValue");
    __publicField(this, "wrapper");
    this.wrapper = H5PWidget.createWrapperElement();
    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
  }
  static createWrapperElement() {
    return document.createElement("div");
  }
}
class UUIDWidget extends H5PWidget {
  appendTo() {
    const { field, params, setValue } = this;
    const isTextField = field.type === "text";
    if (!isTextField) {
      console.warn(`The field \`${field.name}\` has the widget \`uuid\` set, but is of type \`${field.type}\`, not \`text\``);
    }
    const needsID = !params;
    if (needsID) {
      setValue(field, H5P.createUUID());
    }
  }
  validate() {
    return true;
  }
  remove() {
  }
}
H5PEditor.UUIDWidget = UUIDWidget;
H5PEditor.widgets.uuid = UUIDWidget;

})()