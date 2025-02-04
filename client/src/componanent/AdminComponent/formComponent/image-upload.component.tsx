export default function ImageUpload() {
    return (
        <div>
            <div className="col-span-full">
                {/* <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label> */}
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                        </svg>
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <ProductImages imageUrl="https://i.pinimg.com/236x/b0/9d/ce/b09dce1fbeeec696d0c581cf4cff3163.jpg" />
                <ProductImages imageUrl="https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/6257ec4fcb33ee42cdba135e_61b9b7e9effa0fc28ea1bf51_Frame%25207.jpeg"/>
                <ProductImages imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4k6WY61olGiHhaJcgZHvF4jZ3J4UQdIyyhWb4xGLfeQ&s"/>
            </div>

        </div>
    );
}


interface ProudctImageUrlProp{
    imageUrl:string;
}
export function ProductImages(prop:ProudctImageUrlProp){

    return (
        <>
            <div className="border flex justify-center p-2">
                <img className="w-[250px]" src={prop.imageUrl} alt="" />
            </div>
        </>
    )
}