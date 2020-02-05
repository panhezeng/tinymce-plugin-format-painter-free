import React from "react";
import ReactDOM from "react-dom";
import tinymce from "tinymce";
import "../../src/index";
import "../../static/langs/zh_CN";
// import "../../dist/formatpainterfree/langs/zh_CN";
// import "../../dist/formatpainterfree/plugin.min";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
  }

  render() {
    return (
      <textarea
        className="tinymce"
        defaultValue={`
            <p>My button demo: Video selected setDisabled(true)<video controls="controls" width="100" height="100">
                <source src="https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm" type="video/webm" /></video>
            </p>
            <p></p>
            <p>My toggle button demo: strikethrough</p>
            <p></p>
            <p>Autocompleter demo: typing :amp should show the ampersand item in the menu. Pressing esc should close the autocomplete menu.</p>
            <p></p>
            <p>Context Form demo: <a href="https://www.tiny.cloud/docs/">TinyMCE Documentation</a></p>
            
`}
      ></textarea>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
