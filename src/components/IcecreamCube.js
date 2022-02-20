import styled from 'styled-components';

function IcecreamCube({icecream_color,hasmb}) {
    return (
        <>
            {hasmb ? <MarginedCube icecream_color={icecream_color} /> : <TheCube icecream_color={icecream_color} />}
        </>
    );
}

const TheCube = styled.div`
    background-color: ${(props) => props.icecream_color};
    width: 150px;
    height: 120px;
    border-radius: 100%;
    position: relative;
    z-index:9999;
    &::after{
        content: '';
        position: absolute;
        bottom: 10px;
        left: 0px;
        height: 30px;
        background: ${(props) => props.icecream_color};
        width: 150px;
        border-radius: 100%;
        z-index: 9999;
    }
`;
const MarginedCube = styled.div`
    background-color: ${(props) => props.icecream_color};
    width: 150px;
    height: 120px;
    border-radius: 100%;
    position: relative;
    margin-bottom:-80px;
    z-index:9999;
    &::before{
        content: '';
        position: absolute;
        bottom: 10px;
        left: 0px;
        height: 30px;
        background: ${(props) => props.icecream_color};
        width: 150px;
        border-radius: 100%;
        z-index: 2;
    }
`;

export default IcecreamCube;