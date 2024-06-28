import {useSizeContext} from "./assets/SizeContextProvider.jsx";
import {Button} from "./assets/Button.jsx";
import {Image} from "./Image.jsx";
import {useState} from "react";


const baseUrl = "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&crop=edges&fit=crop"

export const SizeSetter = () => {
    const {size, setSize} = useSizeContext()
    const [height, setHeight] = useState('0')
    const [width, setWidth] = useState('0')
    const resizer = (newW, newH) => {
        const newValue = {
            ...size,
            w: newW,
            h: newH,
        }
        setSize(newValue)
        console.log(newH, newW)
    }


    return (
        <>
            <div>
                <div>
                    <h3>Predefined</h3>
                    <Button text="default (w: 200)" handler={() => resizer(200, 0)}/>
                    <Button text="extra small (w: 320)" handler={() => resizer(320, 0)}/>
                    <Button text="small (w: 640)" handler={() => resizer(640, 0)}/>
                    <Button text="medium (w: 1920)" handler={() => resizer(1920, 0)}/>
                    <Button text="large (w: 2400)" handler={() => resizer(2400, 0)}/>
                </div>
                <div>
                    <h3>Set a custom size</h3>
                    <label htmlFor="height">Height: </label>
                    <input type="number" onChange={(e) => setHeight(e.target.value)} id='height' value={height}/> <br/>
                    <label htmlFor="width">Width: </label>
                    <input type="number" onChange={(e) => setWidth(e.target.value)} id='width' value={width}/> <br/>
                    <button onClick={() => resizer(width, height)}>Change size</button>
                </div>
            </div>

            <Image/>
        </>
    )

}
