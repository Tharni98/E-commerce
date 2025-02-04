import { useState } from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';


export default function TextEditor() {

    const [value,setValue] = useState("")

    return (
        <>
            <div className="h-[150px]">
                <ReactQuill className="h-full block relative" theme="snow" value={value} onChange={setValue} />
            </div>
        </>
    )
}