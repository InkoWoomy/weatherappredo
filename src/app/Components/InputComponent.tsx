export default function TextInput() {
    return (
      <div>
        <div className="rounded-md">
          <input
            type="text"
            name="cityName"
            className="block rounded-md py-1.5 pl-7 pr-20 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            placeholder="Enter City here"
          />
        </div>
      </div>
    )
  }