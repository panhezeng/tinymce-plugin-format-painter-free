# tinymce-plugin-format-painter-free [![Build Status](https://travis-ci.org/panhezeng/tinymce-plugin-format-painter-free.svg?branch=master)](https://travis-ci.org/panhezeng/tinymce-plugin-format-painter-free)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![NPM](https://nodei.co/npm/@panhezeng/tinymce-plugin-format-painter-free.png?compact=true)](https://nodei.co/npm/@panhezeng/tinymce-plugin-format-painter-free/)

> tinymce plugin

## Example

[点击预览](https://panhezeng.github.io/tinymce-plugin-format-painter-free/)

## Explain

## Use

```javascript
tinymce.init({
  selector: "textarea.tinymce",
  plugins:
    "formatpainterfree print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons  ",
  menu: {
    myallmenus: {
      title: "My all menus",
      items: "mymenu | mynestedmenu | mytogglemenu"
    }
  },
  menubar: "edit myallmenus",
  toolbar:
    "code | mybutton | mytogglebutton | mysplitbutton | mymenubutton | mysidebar",
  min_height: 600
});
```

## Development

- [Create a plugin for TinyMCE](https://www.tiny.cloud/docs/advanced/creating-a-plugin/)
- [How to create custom UI components](https://www.tiny.cloud/docs/ui-components/)
- [Editor icon identifiers](https://www.tiny.cloud/docs/advanced/editor-icon-identifiers/)
- [Editor events](https://www.tiny.cloud/docs/advanced/events/)
- [semantic-release-cli setup](https://semantic-release.gitbook.io/semantic-release/usage/getting-started)

### Test

example/src/index.js => import "../../src/index";
`npm run dev:example`
