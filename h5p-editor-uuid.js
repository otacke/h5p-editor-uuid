// @ts-check

/**
 * @type {{
 *  EventDispatcher: typeof Function;
 *  createUUID: () => string;
 * }}
 */
// @ts-expect-error H5P will be defined on `window` in an H5P context
const H5P = window.H5P;

// @ts-expect-error H5PEditor will be defined on `window` in an H5P Editor context
const H5PEditor = window.H5PEditor;

class UUIDWidget extends H5P.EventDispatcher {
  /**
   *
   * @param {unknown} parent
   * @param {{name: string; type: string;}} field
   * @param {string | undefined} params
   * @param {(newValue: string) => void} setValue
   */
  constructor(parent, field, params, setValue) {
    super();

    const isTextField = field.type === "text";
    if (!isTextField) {
      console.warn(
        `The field \`${field.name}\` has the widget \`uuid\` set, but is of type \`${field.type}\`, not \`text\``
      );
    }

    const needsID = !params;
    if (needsID) {
      setValue(H5P.createUUID());
    }

    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
  }

  /**
   * @param {any} $container
   * @returns {void}
   */
  appendTo($container) {
    /** @type {HTMLElement | null} */
    const containerElement = $container.get(0);
    if (!containerElement) {
      console.error(
        `Could not find container element for field \`${this.field.name}\` with the widget \`uuid\``
      );
      return;
    }

    containerElement.style.display = "none";
  }

  validate() {
    return true;
  }

  remove() {}
}

H5PEditor.UUIDWidget = H5PEditor.widgets.uuid = UUIDWidget;
