const cropMiddleString = (str) => {
  if (!str?.length > 10)
    return
    
  return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`
}

export default cropMiddleString

// this helper requires string length larger than 10