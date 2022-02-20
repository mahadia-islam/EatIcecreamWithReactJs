import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addAIcecream, removeAItem } from "./store";

function IcecreamAdd() {

    const dispatch = useDispatch();
    const { totalBill,icecreams } = useSelector(state => state.icecream);

    const addHandler = (type) => {
        dispatch(addAIcecream(type));
    }

    const removeHandler = (index,price) => {
        dispatch(removeAItem(index,price));
        console.log(icecreams);
    }

    return (
        <div className="icecream_add">
            <Container>
                <AddIcecream>
                    <div className="add_box">
                        <div className="flavor">
                            <span>Vanilla</span>
                            <button onClick={() => addHandler('vanilla')}><i className="fa fa-plus"></i></button>
                        </div>
                        <div className="flavor">
                            <span>Mint</span>
                            <button onClick={() => addHandler('mint')}><i className="fa fa-plus"></i></button>
                        </div>
                        <div className="flavor">
                            <span>Strawberry</span>
                            <button onClick={() => addHandler('strawberry')}><i className="fa fa-plus"></i></button>
                        </div>
                    </div>
                </AddIcecream>
            </Container>
            <Container>
                <BillDetail>
                    {icecreams.map((icecream,index) => (
                        <div key={index} className="all_bills">
                        <div><span>{icecream.name}</span><button onClick={() => removeHandler(icecream.id,icecream.price)}><i className="fa fa-minus"></i></button></div>
                        </div>
                    ))}
                    <div className="total_bills">
                        <span>{ totalBill }$</span>
                    </div>
                </BillDetail>
            </Container>
        </div>
    )
}

const Container = styled.div`
    width: 400px;
`;

const AddIcecream = styled.div`
    width: 100%;
    .add_box{
        width: 100%;
        padding:10px 10px;
        margin-top:10px;
        border-radius:10px;
        background-color:#0099FF;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        .flavor{
            background-color:#fff;
            display:flex;
            justify-content:space-between;
            padding:5px 5px 5px 10px;
            border-radius:10px;
            align-items:center;
            color: #0099FF;
            margin:10px 0;
            span{
                font-family:'Nunito',sans-serif;
                font-size:14px;
            }
            button{
                background-color:#0099FF;
                padding: 10px 15px;
                border:none;
                color: #fff;
                border-radius:10px;
            }
        }
    }
`;

const BillDetail = styled.div`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 100%;
    padding:20px 10px 10px 10px;
    margin-left:20px;
    border-radius:10px;
    @media (max-width:768px){
        margin-left:0px;
        margin-top:20px;
    }
    .all_bills{
        margin:10px 0;
        div{
            display:flex;
            padding:5px 5px 5px 10px;
            justify-content:space-between;
            background-color:#0099FF;
            color: #fff;
            align-items:center;
            border-radius:5px;
            span{
                font-family:'Nunito',sans-serif;
            }
            button{
                background-color:#fff;
                color: #0099FF;
                border:none;
                padding:8px 14px;
                font-size:13px;
                border-radius:10px;
            }
        }
    }
    .total_bills{
        margin:20px 0px;
        display:flex;
        justify-content:flex-end;
        padding:10px;
        width:100%;
        span{
            &:last-child{
                color: #0099FF;
            }
        }
    }
`;

export default IcecreamAdd;