import styled from 'styled-components'

const SpinnerContainer = styled.div`
    position:fixed;
    display:${props => props.display};
    top:0;
    left:0;
    width:100vw;
    height: 100vh;
    background-color:#ffffffaa;
    align-items:center;
    justify-content:center;
`
const Loading = (props) => {
    return (
        <SpinnerContainer display={props.display}>
            <div className="spinner-border" style={{width:'3rem', height:'3rem'}} role="status" />
        </SpinnerContainer>
    );
}
 
export default Loading;