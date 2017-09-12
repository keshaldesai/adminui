import React, { Component } from "react";
import ReactQuill from "react-quill";

class CompEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus euismod urna ut aliquam. Nulla nec lorem eget odio viverra placerat eget et enim. Nam a aliquam metus, sit amet finibus arcu. Phasellus turpis lectus, semper in imperdiet vel, semper auctor orci. Integer felis augue, dapibus eu metus ac, laoreet dapibus augue.</p><blockquote> Integer sed mi et justo feugiat feugiat nec ac erat. Donec feugiat placerat nisl, nec ultrices nisi faucibus et. Cras sagittis commodo accumsan. In a eros blandit, laoreet lorem sit amet, pretium nisi. <b>Nunc felis risus, venenatis eu magna in, rutrum venenatis mauris.</b> Fusce egestas varius lectus ut ultrices.</blockquote></br><p>Praesent feugiat porttitor urna posuere fermentum. In sapien erat, interdum quis tortor nec, tincidunt convallis ligula. Morbi rhoncus ullamcorper ante, vel vestibulum purus ultrices ut. Curabitur facilisis nisl in pretium scelerisque. Maecenas eget cursus purus. Vivamus eu augue et mauris pulvinar sagittis vitae vitae lacus. Integer sit amet lacinia est. Etiam sit amet lacus in turpis euismod egestas vitae at sapien. Integer elementum quis tellus sit amet volutpat.</p></br><p><em>Nullam nec molestie ipsum. Nunc rhoncus lacus in placerat gravida. Donec pulvinar mauris quis porta finibus.</em></p>"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return <ReactQuill value={this.state.text} onChange={this.handleChange} />;
  }
}

export default CompEditor;
