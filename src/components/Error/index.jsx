import React from 'react';

const Error = ({ error }) => {

  return (
    <p role="alert" style={{ fontSize: "32px" }}>Oops there's been an error! {error} <br /><br /> Try to refresh the page <br /><br /> If the issue persists please contact romeo@admin.com </p>
  );
}

export default Error;