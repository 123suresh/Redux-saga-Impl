import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchGetResponse } from '../actions';

function KeyHighlites(props) {
    console.log("from props ", props.naxaData)
  useEffect(() =>{
    props.fetchGetResponse()
  },[])
  
  return (
    <div>KeyHighlites</div>
  )
}

const mapStateToProps = ({ naxa }) => ({
    naxaData:naxa
});

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchGetResponse: () => dispatch(fetchGetResponse()),
  };
};

// export default KeyHighlites

export default connect(mapStateToProps, mapDispatchtoProps)(KeyHighlites)