import Img from "./Components/Img";
import Previews from "./Components/Previews";
import Price from "./Components/Price";
import Contents from "./Components/Contents";

const App = () => {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-6"}>
                    <div className={"card"}>
                        <div>
                            <Img/>
                        </div>
                        <div>
                            <Contents/>
                            <div className={"title-previews"}>
                                <Price/>
                            </div>
                            <div className={"previews"}>
                                <Previews/>
                                <Previews/>
                                <Previews/>
                                <Previews/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;