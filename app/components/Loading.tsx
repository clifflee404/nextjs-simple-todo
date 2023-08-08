import React from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Loading = () => {
  return (
    <div className="flex items-center justify-center py-4">
      {/* <span className="loading loading-spinner loading-md"></span> */}
      <AiOutlineLoading3Quarters className="animate-spin w-6 h-6"/>
    </div>
  )
}

export default Loading
