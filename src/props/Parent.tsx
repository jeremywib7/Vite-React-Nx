import {Child, ChildAsFC} from './Child';

const Parent = () => {
    return <ChildAsFC
        color="black"
        onClick={() => console.log("test")}
    />
}

export default Parent;
