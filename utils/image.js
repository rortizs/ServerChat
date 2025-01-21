export function getFilePath(file){

  const filePath = file.path;
  let fileSplit = "";

  // Check if the file is in Windows or Linux
  //'C:\\Users\\User\\Desktop\\image.jpg'.includes("\\") ? fileSplit = filePath.split("\\") : fileSplit = filePath.split("/");
  if(filePath.includes("\\")){
    fileSplit = filePath.split("\\"); // Windows
  }else{
    fileSplit = filePath.split("/"); // Linux
  }

  return fileSplit.slice(1).join("/"); // Remove the first element
  //'C:\\Users\\User\\Desktop\\image.jpg'.includes("\\") ? fileSplit = filePath.split("\\") : fileSplit = filePath.split("/");
    
}