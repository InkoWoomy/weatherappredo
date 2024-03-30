export default function TextInput() {
    return (
      
        <div className="rounded-md grid">
          <input
            type="text"
            name="cityName"
            className="block rounded-md py-1.5 pl-7 pr-20 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-3xl"
            placeholder="Enter City here"
          />
        </div>
      
    )
  }