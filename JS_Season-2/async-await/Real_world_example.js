/* using Fetch
 fetch call - gives you promise. Once resolved ,whatever data we get, it will come in readable stream.
 returns a response with response body, which will be readable stream
 we need to cnonvert it to json ==> json value =>result 

*/
const API_URL = 'https://api.github.com/users/fareha0402'

async function getUserInfo() {

    const data = await fetch(API_URL)
    const dataValue = await data.json()
    console.log(dataValue)
    
}

getUserInfo()

/* Here’s the reason you need await twice:

First await (Waiting for the Response):

The fetch call doesn’t immediately provide the response data; it gives you a Promise. You need to await it to get the Response object.
Second await (Parsing the Body):

The .json() method (or other body-reading methods) returns another Promise. You need to await this to extract the parsed content.
If you skip either await, you’ll likely end up with unexpected behavior:

Skipping the first await: You’ll be working with the unresolved Promise instead of the actual Response object.
Skipping the second await: You’ll get a Promise instead of the parsed data. */

// https://dev.to/abhivyaktii/understanding-why-fetch-requires-await-twice-53l6#:~:text=Here%E2%80%99s%20the%20reason%20you%20need%20await%20twice%3A%20The,method%20%28or%20other%20body-reading%20methods%29%20returns%20another%20Promise.