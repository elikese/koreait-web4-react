import ModalContainer from "./02-useState/Modal/ModalContainer";
import NavBar from "./02-useState/NavBar/NavBar";
import UseState01 from "./02-useState/UseState01";
import UseState02 from "./02-useState/UseState02";
import UseState03 from "./02-useState/UseState03";
import UseState04 from "./02-useState/UseState04";
import UseState05 from "./02-useState/UseState05";
import UseState06 from "./02-useState/UseState06";
import UseState07 from "./02-useState/UseState07";
import UseState08 from "./02-useState/UseState08";
import UseState09 from "./02-useState/UseState09";
import Unmount from "./03-useEffect/Unmount/Unmount";
import UseEffect01 from "./03-useEffect/UseEffect01";
import UseEffect02 from "./03-useEffect/UseEffect02";
import UseEffect03 from "./03-useEffect/UseEffect03";
import UseEffect04 from "./03-useEffect/UseEffect04";
import UseRef01 from "./04-useRef/UseRef01";
import UseRef02 from "./04-useRef/UseRef02";
import Axios01 from "./Axios/Axios01";
import Axios02 from "./Axios/Axios02";
import Emotion01 from "./Emotion/Emotion01";
import Emotion02 from "./Emotion/Emotion02";
import Router01 from "./ReactRouter/Router01/Router01";
import Router02 from "./ReactRouter/Router02/Router02";
import Router03 from "./ReactRouter/Router03/Router03";
import Router04 from "./ReactRouter/Router04/Router04";
import Router05 from "./ReactRouter/Router05/Router05";
import Zustand01 from "./Zustand/Zustand01";
import Zustand02 from "./Zustand/Zustand02";
import Zustand03 from "./Zustand/Zustand03";
import Zustand04 from "./Zustand/Zustand04";

export default function Study() {
    const stateStudy = {
        1: <UseRef01 />,
        2: <UseRef02 />,
        3: <Emotion01 />,
        4: <Emotion02 />,
        5: <Router01 />,
        6: <Router02 />,
        7: <Router03 />,
        8: <Router04 />,
        9: <Router05 />,
        10: <Zustand01 />,
        11: <Zustand02 />,
        12: <Zustand03 />,
        13: <Zustand04 />,
        14: <Axios01 />,
        15: <Axios02 />
    };

    return stateStudy[15];
}
