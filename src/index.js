const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName,fileContent);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let file = await fs.readFile(fileName,"utf-8");
	console.log(file);
	// return file;
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 const appendData = await fs.appendFile(fileName,fileContent);
		console.log(appendData);
	}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName);
}

myFileWriter('input.txt','Mehul');
// myFileReader('input.txt')
// myFileUpdater('input.txt',"sahu")
// myFileReader("input.txt");
// myFileUpdater("input.txt","Sahu")
// myFileDeleter("input.txt")

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }