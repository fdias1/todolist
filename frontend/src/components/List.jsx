import React from 'react';
import styled from 'styled-components'

const LintContainer = styled.ul`
    padding:0;
`
const List = (props) => {
    return (
        <div className="col mx-4 p-4 border rounded">
            <h3 className="mb-4">{props.title}</h3>
            <LintContainer>
                {props.children}
            </LintContainer>
        </div>
    );
}
 
export default List;