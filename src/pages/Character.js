import React, {Component, Fragment} from 'react';
// import { FirestoreDocument } from 'react-firestore';

class Characters extends Component {
  render() {
    console.log(this.props.match);
    return (
      <Fragment>
        <h1>Character</h1>
        {/*<FirestoreDocument*/}
          {/*path="characters/"*/}
        {/*>*/}
          {/**/}
        {/*</FirestoreDocument>*/}
      </Fragment>
    );
  }
}

export default Characters;
