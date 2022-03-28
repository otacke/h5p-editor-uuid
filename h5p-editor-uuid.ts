import { H5PFieldText, IH5PWidget } from "h5p-types";
import { H5PWidget } from "h5p-utils/src/models/H5PWidget";
import { H5P, H5PEditor } from "h5p-utils/src/utils/H5P.utils";

class UUIDWidget extends H5PWidget<H5PFieldText> implements IH5PWidget {
  appendTo() {
    const { field, params, setValue } = this;

    const isTextField = field.type === "text";
    if (!isTextField) {
      console.warn(
        `The field \`${field.name}\` has the widget \`uuid\` set, but is of type \`${field.type}\`, not \`text\``
      );
    }

    const needsID = !params;
    if (needsID) {
      setValue(field, H5P.createUUID());
    }
  }

  validate() {
    return true;
  }

  remove() {}
}

(H5PEditor as any).UUIDWidget = UUIDWidget;
(H5PEditor as any).widgets.uuid = UUIDWidget;
