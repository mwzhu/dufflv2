import React from "react";

const SearchFound = props => {
    let { searchFound } = props;

    if (!searchFound) {
        return <h3>No matching items found</h3>
    } else {
        return null;
    }
};

export default SearchFound;