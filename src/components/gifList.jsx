import React from "react";
import { BeatLoader } from "react-spinners";
import { isEmpty } from "lodash";

class gifList extends React.Component {
  render() {
    const { gifs } = this.props;
    return (
      <React.Fragment>
        {isEmpty(gifs) && (
          <div className="spinner">
            <BeatLoader
              size={20}
              color={"#F7C59F"}
              /*  loading={this.state.loading} */
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default gifList;
