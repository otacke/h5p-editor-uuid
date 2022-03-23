import { H5PFieldText } from "h5p-types/src/types/H5PField";
import { H5PWidget } from "h5p-types/src/types/H5PWidget";
import { IH5PWidget } from "h5p-types/src/types/IH5PWidget";
import { H5P, H5PEditor } from "h5p-types/src/utils/H5P.utils";

class UUIDWidget extends H5PWidget<H5PFieldText> implements IH5PWidget {
  appendTo($container: JQuery<HTMLElement>) {
    const isTextField = this.field.type === "text";
    if (!isTextField) {
      console.warn(
        `The field \`${this.field.name}\` has the widget \`uuid\` set, but is of type \`${field.type}\`, not \`text\``
      );
    }

    const needsID = !this.params;
    if (needsID) {
      this.setValue(this.field, H5P.createUUID());
    }
  }

  validate() {
    return true;
  }

  remove() {}
}

H5PEditor["UUIDWidget"] = UUIDWidget;

H5PEditor.widgets["uuid"] = UUIDWidget;
