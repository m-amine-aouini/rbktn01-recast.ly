// src\data\exampleVideoData.js

import VideoListEntry from './videoListEntry.js';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.setState({ list: this.props.List });

  }
  render() {

    return (
      <div className="video-list">

        {
          this.state.list.map(data => (<VideoListEntry video={data} />))
        }
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
